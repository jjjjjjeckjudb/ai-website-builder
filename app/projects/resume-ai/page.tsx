"use client";

import { useState } from "react";

export default function ResumeAI() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [experience, setExperience] = useState("");
  const [improvedExperience, setImprovedExperience] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

 const improveExperience = async () => {
  setIsLoading(true);
  setError("");
  setImprovedExperience("");

  try {
    const response = await fetch("/api/improve-resume", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        experience: experience,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Could not improve the resume.");
    }

    setImprovedExperience(data.message);
  } catch (error) {
    setError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    setIsLoading(false);
  }
};

return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">

      {/* Pastel background */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-purple-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-sky-300/15 blur-[150px]" />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:py-20">
        {/* Back button */}
        <a
          href="/"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-pink-300/30 hover:bg-white/[0.1] hover:text-white"
        >
          ← Back to home
        </a>

        {/* Hero */}
        <div className="mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-pink-200">
            AI Project
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Build a better
            <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
              resume with AI.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Resume AI helps users create, improve and customize professional
            resumes with intelligent suggestions.
          </p>

          {/* Technologies */}
          <div className="mt-10 flex flex-wrap gap-3">
            {["Next.js", "TypeScript", "AI", "PDF"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Resume form */}
<div className="mt-16 max-w-2xl rounded-3xl border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
  <p className="text-sm uppercase tracking-[0.3em] text-pink-200">
    Create your resume
  </p>

  <h2 className="mt-4 text-2xl font-semibold">
    Tell me about yourself
  </h2>

  {/* Name */}
  <div className="mt-6">
    <label className="mb-2 block text-sm text-zinc-400">
      Your name
    </label>

    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      placeholder="John Smith"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-300/50"
    />
  </div>

  {/* Role */}
  <div className="mt-5">
    <label className="mb-2 block text-sm text-zinc-400">
      Your role
    </label>

    <input
      type="text"
      value={role}
      onChange={(e) => setRole(e.target.value)}
      placeholder="AI Developer"
      className="w-full rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-300/50"
    />
  </div>
  {/* Experience */}
<div className="mt-5">
  <label className="mb-2 block text-sm text-zinc-400">
    Your experience
  </label>

  <textarea
    value={experience}
    onChange={(e) => setExperience(e.target.value)}
    placeholder="Tell us about your experience, skills and achievements..."
    rows={5}
    className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.05] px-5 py-4 text-white outline-none transition placeholder:text-zinc-600 focus:border-purple-300/50"
  />
</div>

  {/* Improve button */}
<button
  type="button"
  onClick={improveExperience}
  disabled={isLoading || !experience.trim()}
  className="mt-6 w-full rounded-2xl bg-gradient-to-r from-pink-200 via-purple-200 to-sky-200 px-6 py-4 font-semibold text-slate-900 transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
>
  {isLoading ? "✨ Improving..." : "✨ Improve with AI"}
</button>
{error && (
  <div className="mt-5 rounded-2xl border border-red-300/20 bg-red-300/10 p-4">
    <p className="text-sm text-red-200">
      {error}
    </p>
  </div>
)}

{/* Improved result */}
{improvedExperience && (
  <div className="mt-5 rounded-2xl border border-purple-300/20 bg-purple-300/10 p-5">
    <p className="text-sm font-semibold text-purple-100">
      ✨ Improved version
    </p>

    <p className="mt-3 leading-7 text-zinc-200">
      {improvedExperience}
    </p>
    <button
  type="button"
  onClick={() => navigator.clipboard.writeText(improvedExperience)}
  className="mt-4 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200 transition hover:bg-white/[0.1]"
>
  Copy result
</button>
  </div>
)}
  {/* Live result */}
<div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
  <p className="text-sm text-zinc-400">
    Name:{" "}
    <span className="font-medium text-white">
      {name || "Your name will appear here"}
    </span>
  </p>

  <p className="mt-2 text-sm text-zinc-400">
    Role:{" "}
    <span className="font-medium text-white">
      {role || "Your role will appear here"}
    </span>
  </p>

  <p className="mt-4 text-sm text-zinc-400">
    Experience:
  </p>

  <p className="mt-2 whitespace-pre-wrap text-sm leading-6 text-white">
    {experience || "Your experience will appear here"}
  </p>
</div>
</div>
        {/* Preview */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-pink-300/10 via-purple-300/10 to-sky-300/10 p-8 sm:min-h-[420px]">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-purple-200 text-xl text-slate-900">
                  CV
                </div>

                <div>
  <p className="font-semibold text-white">
    {name || "Your Name"}
  </p>

  <p className="mt-1 text-sm text-zinc-400">
    {role || "Your Role"}
  </p>
</div>
              </div>

              <div>
  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-purple-200">
    Experience
  </p>

  <p className="mt-3 whitespace-pre-wrap text-sm leading-6 text-zinc-300">
    {improvedExperience ||
      experience ||
      "Your professional experience will appear here."}
  </p>
</div>

              <div className="mt-7 rounded-xl border border-purple-300/20 bg-purple-300/10 p-4 text-sm text-purple-100">
  {improvedExperience
    ? "✦ AI improved your experience to make it clearer and more results-focused."
    : "✦ AI suggestion: Improve your experience to make it more specific and results-focused."}
</div>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200">
              About
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Smarter resume creation
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              Users can improve descriptions, rewrite sections and receive
              AI-powered suggestions for creating a clearer and more
              professional resume.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              Features
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              What it can do
            </h2>

            <div className="mt-4 space-y-3 text-zinc-400">
              <p>✦ AI writing suggestions</p>
              <p>✦ Resume customization</p>
              <p>✦ Professional formatting</p>
              <p>✦ PDF export</p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-20 border-t border-white/10 pt-8">
          <a
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-pink-200"
          >
            ← Explore other projects
          </a>
        </div>
      </section>
    </main>
  );
}