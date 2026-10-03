"use client";

import { useState } from "react";
import Link from "next/link";
export default function WebsiteBuilder() { 
    const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [headline, setHeadline] = useState("");
const [description, setDescription] = useState("");
const [cta, setCta] = useState("");
const [features, setFeatures] = useState<string[]>([]);
  const [websiteType, setWebsiteType] = useState("Landing Page");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const previewGradient =
  websiteType === "Online Store"
    ? "from-orange-300/20 via-pink-300/20 to-purple-300/20"
    : websiteType === "Portfolio"
      ? "from-sky-300/20 via-purple-300/20 to-pink-300/20"
      : websiteType === "Blog"
        ? "from-emerald-300/20 via-sky-300/20 to-purple-300/20"
        : websiteType === "SaaS Website"
          ? "from-blue-300/20 via-indigo-300/20 to-purple-300/20"
          : "from-pink-300/20 via-purple-300/20 to-sky-300/20";
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">
      {/* Pastel background glow */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-sky-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-purple-300/15 blur-[150px]" />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:py-20">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-purple-300/30 hover:bg-white/[0.1] hover:text-white"
        >
          ← Back to home
        </Link>

        {/* Hero */}
        <div className="mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-purple-200">
            Featured project
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            AI Website
            <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
              Builder
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Create modern websites by describing what you want in natural
            language.
          </p>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["Next.js", "TypeScript", "AI", "Tailwind CSS"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Website generator */}
<div className="mt-12">
  <select
  value={websiteType}
  onChange={(e) => setWebsiteType(e.target.value)}
  className="mb-4 w-full rounded-2xl border border-white/10 bg-[#181a38] p-4 text-white outline-none focus:border-purple-300/40"
>
  <option>Landing Page</option>
  <option>Portfolio</option>
  <option>Online Store</option>
  <option>Blog</option>
  <option>SaaS Website</option>
</select>
  <textarea
    value={prompt}
    onChange={(e) => setPrompt(e.target.value)}
    placeholder="Describe the website you want to create..."
    className="min-h-32 w-full rounded-2xl border border-white/10 bg-white/[0.05] p-5 text-white outline-none backdrop-blur-xl placeholder:text-zinc-500 focus:border-purple-300/40"
  />
  <button
  disabled={isLoading || !prompt.trim()}
  onClick={async () => {
    if (!prompt.trim() || isLoading) return;
    setIsLoading(true);
    setError("");
    setResult("");
    setHeadline("");
setDescription("");
setCta("");
setFeatures([]);
    try {
      const response = await fetch("/api/generate-website", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt, websiteType }),
        signal: AbortSignal.timeout(70000),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Generation failed. Please try again.");
      if (typeof data.message !== "string" || !data.message.trim()) throw new Error("The AI service returned an empty response.");
      const cleanedMessage = data.message
  .replace(/```json/g, "")
  .replace(/```/g, "")
  .trim();

const parsed = JSON.parse(cleanedMessage);

setResult(data.message);
setHeadline(parsed.headline || "");
setDescription(parsed.description || "");
setCta(parsed.cta || "");
setFeatures(
  Array.isArray(parsed.features) ? parsed.features.slice(0, 3) : []
);
    } catch (error) {
      setError(error instanceof Error && !["TimeoutError", "AbortError"].includes(error.name)
        ? error.message : "Generation timed out. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }}
  className="mt-4 rounded-full bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 px-6 py-3 font-semibold text-[#11152d] transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
>
  {isLoading ? "Generating..." : "Generate Website"}
</button>
  {error && <p role="alert" className="mt-4 rounded-2xl border border-red-300/30 bg-red-300/10 p-4 text-red-200">{error}</p>}
</div>

{/* Project preview */}
<div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
  <div
    className={`flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br ${previewGradient} p-8 transition-all duration-500 sm:min-h-[420px]`}
  >
    <div className="w-full text-center">
      <div className="mb-10 flex items-center justify-between border-b border-white/10 pb-4">
  <span className="text-lg font-bold">
    {headline ? headline.split(" ").slice(0, 2).join(" ") : "Your Brand"}
  </span>

  <div className="hidden gap-6 text-sm text-zinc-300 sm:flex">
    <span>Home</span>
    <span>About</span>
    <span>Contact</span>
  </div>
</div>
      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-3xl shadow-xl">
        ✦
      </div>

      

      <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
  {headline ? headline : "Your website will appear here"}
</h2>

      <p className="mx-auto mt-3 max-w-md text-zinc-400">
  {description
    ? description
    : "Choose a website type, describe your idea, and click Generate Website."}
</p>
      {cta && (
  <button className="mt-6 rounded-full bg-white px-6 py-3 font-semibold text-[#11152d] transition hover:scale-[1.02]">
    {cta}
  </button>
)}
<div className="mt-12 grid gap-4 sm:grid-cols-3">
  {(features.length > 0
  ? features
  : ["Fast", "Modern", "AI Powered"]
).map((item) => (
    <div
      key={item}
      className="rounded-2xl border border-white/10 bg-white/10 p-5"
    >
      <p className="font-semibold">{item}</p>
    </div>
  ))}
</div>
    </div>
  </div>
</div>

{/* About */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
              About
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              About the project
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              This project allows users to generate website ideas and
              interfaces using artificial intelligence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              Goal
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              What I am building
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              The goal is to turn a simple text description into a useful,
              modern website while keeping the experience fast and easy to
              understand.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <Link
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-purple-200"
          >
            ← Explore other projects
          </Link>
        </div>
      </section>
    </main>
  );
}