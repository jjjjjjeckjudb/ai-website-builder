export const runtime = "nodejs";

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON request." }, { status: 400 });
  }
  const { prompt, websiteType } = body ?? {};
  if (typeof prompt !== "string" || !prompt.trim() || prompt.length > 10000 ||
      typeof websiteType !== "string" || !["Landing Page", "Portfolio", "Online Store", "Blog", "SaaS Website"].includes(websiteType)) {
    return Response.json({ error: "Enter a website idea and choose a valid website type." }, { status: 400 });
  }
  const key = process.env.OPENROUTER_API_KEY?.trim();
  if (!key) {
    return Response.json({ error: "The AI service is not configured." }, { status: 503 });
  }
  try {
    const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${key}`,
      },
      signal: AbortSignal.timeout(60000),
      body: JSON.stringify({
        model: "openrouter/free",
        
        messages: [{
          role: "user",
          content: `Create content for a ${websiteType}.

User idea:
${prompt.trim()}

Return ONLY a valid JSON object in exactly this structure:

{
  "headline": "A short website headline",
  "description": "A short website description",
  "cta": "A short call-to-action button text",
  "features": ["First benefit", "Second benefit", "Third benefit"]
}

Rules:
- Return valid JSON only.
- Do not use Markdown.
- Do not use **bold** text.
- Do not use headings.
- Do not use code fences.
- Do not write anything before or after the JSON.`,
        }],
      }),
    });
    // Do not log upstream bodies: they can contain private prompts or credentials.
    if (!response.ok) {
      const error = response.status === 403
        ? "OpenRouter blocked access (403). Check network access and OpenRouter account restrictions; changing the model or API key may not resolve this."
        : response.status === 401
          ? "OpenRouter rejected the API key. Check the server configuration."
          : response.status === 429
            ? "OpenRouter request limit reached. Please try again later."
            : "The AI service could not complete the request. Please try again later.";
      return Response.json({ error, upstreamStatus: response.status }, { status: response.status === 429 ? 429 : 502 });
    }
    const data = await response.json();
    const content = data.choices?.[0]?.message?.content;
    if (typeof content !== "string" || !content.trim()) {
      return Response.json({ error: "The AI service returned an empty response. Please try again." }, { status: 502 });
    }
    const jsonStart = content.indexOf("{");
const jsonEnd = content.lastIndexOf("}");

if (jsonStart === -1 || jsonEnd === -1) {
  return Response.json(
    { error: "The AI returned an unexpected response. Please try again." },
    { status: 502 }
  );
}

const cleanContent = content.slice(jsonStart, jsonEnd + 1);

return Response.json({ message: cleanContent });
  } catch (error) {
    const timeout = error instanceof Error && (error.name === "TimeoutError" || error.name === "AbortError");
    return Response.json({ error: timeout ? "Generation timed out. Please try again." : "Could not connect to the AI service. Please try again later." }, { status: timeout ? 504 : 502 });
  }
}
