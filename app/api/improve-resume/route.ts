export async function POST(request: Request) {
  const body = await request.json();
  const experience = body.experience;

  const response = await fetch(
    "https://openrouter.ai/api/v1/chat/completions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
      },
      body: JSON.stringify({
        model: "openrouter/free",
        messages: [
          {
            role: "user",
            content: `Rewrite the following work experience for a professional resume.
Make it concise, professional, and results-focused.
Return only the improved text.

Experience:
${experience}`,
          },
        ],
      }),
    }
  );

  const data = await response.json();

  console.log("OPENROUTER RESPONSE:", JSON.stringify(data, null, 2));

  const improvedText =
    data.choices?.[0]?.message?.content ||
    "Could not generate an improved version.";

  return Response.json({
    message: improvedText,
  });
}