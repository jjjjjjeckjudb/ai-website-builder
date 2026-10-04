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

  const experience = body?.experience;

  if (typeof experience !== "string" || !experience.trim()) {
    return Response.json(
      { error: "Enter your work experience." },
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
              role: "user",
              content: `Rewrite the following work experience for a professional resume.

Make it concise, professional, and results-focused.

Return only the improved text.
Do not use Markdown, headings, labels, or bullet symbols.

Experience:
${experience.trim()}`,
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

    const improvedText = content
      .replace(/\*\*/g, "")
      .replace(/Improved version:?/gi, "")
      .replace(/&#xA0;/gi, " ")
      .trim();

    return Response.json({
      message: improvedText,
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