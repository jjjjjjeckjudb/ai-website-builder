export const runtime = "nodejs";

export async function POST(request: Request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid request." },
      { status: 400 }
    );
  }

  const question = body?.question;
  const answer = body?.answer;

  if (
    typeof question !== "string" ||
    !question.trim() ||
    typeof answer !== "string" ||
    !answer.trim()
  ) {
    return Response.json(
      { error: "Enter your answer first." },
      { status: 400 }
    );
  }

  const key = process.env.OPENROUTER_API_KEY?.trim();

  if (!key) {
    return Response.json(
      { error: "The AI service is not configured." },
      { status: 503 }
    );
  }

  try {
    const response = await fetch(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${key}`,
        },
        signal: AbortSignal.timeout(60000),
        body: JSON.stringify({
          model: "openrouter/free",
          messages: [
            {
              role: "system",
              content:
                "You are a technical interviewer. Evaluate the candidate's answer. Give concise, constructive feedback. Explain what was correct and what could be improved. Do not use Markdown headings.",
            },
            {
              role: "user",
              content: `Interview question:
${question.trim()}

Candidate answer:
${answer.trim()}`,
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      return Response.json(
        { error: "The AI service could not complete the request." },
        { status: 502 }
      );
    }

    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;

    if (typeof content !== "string" || !content.trim()) {
      return Response.json(
        { error: "The AI returned an empty response. Please try again." },
        { status: 502 }
      );
    }

    return Response.json({
      message: content.trim(),
    });
  } catch (error) {
    const timeout =
      error instanceof Error &&
      (error.name === "TimeoutError" || error.name === "AbortError");

    return Response.json(
      {
        error: timeout
          ? "Generation timed out. Please try again."
          : "Could not connect to the AI service. Please try again later.",
      },
      { status: timeout ? 504 : 502 }
    );
  }
}