export const runtime = "nodejs";
const knowledgeBase = `
Personal Knowledge Base:

1. RAG
Retrieval-Augmented Generation combines information retrieval with AI generation.
Before answering, the system retrieves relevant information from a knowledge source
and gives that context to the language model.

2. AI Agents
AI agents are systems that can reason about a goal, choose actions, and use tools
or external data to complete tasks.

3. Next.js
Next.js is a React framework used for building full-stack web applications.
It supports server-side functionality, routing, API endpoints, and React components.

4. SecondBrain
SecondBrain is a personal AI knowledge assistant.
Its purpose is to help users search saved information and ask questions about their notes.
`;
function findRelevantKnowledge(question: string) {
  const lowerQuestion = question.toLowerCase();

  if (lowerQuestion.includes("rag")) {
    return `RAG:
Retrieval-Augmented Generation combines information retrieval with AI generation.
Before answering, the system retrieves relevant information from a knowledge source
and gives that context to the language model.`;
  }

  if (lowerQuestion.includes("agent")) {
    return `AI Agents:
AI agents are systems that can reason about a goal, choose actions, and use tools
or external data to complete tasks.`;
  }

  if (lowerQuestion.includes("next.js") || lowerQuestion.includes("nextjs")) {
    return `Next.js:
Next.js is a React framework used for building full-stack web applications.
It supports server-side functionality, routing, API endpoints, and React components.`;
  }

  if (lowerQuestion.includes("secondbrain")) {
    return `SecondBrain:
SecondBrain is a personal AI knowledge assistant.
Its purpose is to help users search saved information and ask questions about their notes.`;
  }

  return null;
}

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

  if (typeof question !== "string" || !question.trim()) {
    return Response.json(
      { error: "Enter a question." },
      { status: 400 }
    );
  }

 const relevantKnowledge = findRelevantKnowledge(question);

if (!relevantKnowledge) {
  return Response.json({
    message: "I could not find information about that in your saved notes.",
  });
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
  content: `You are SecondBrain, a personal knowledge assistant.

Answer the user's question using only the saved note below.
Be clear and concise.

Relevant saved note:

${relevantKnowledge}`,
},

            {
              role: "user",
              content: question.trim(),
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
  source: relevantKnowledge.split(":")[0],
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