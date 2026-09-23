"use client";

import { useState } from "react";
import Link from "next/link";export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const projects = [
    {
      title: "AI Website Builder",
      description: "Create websites by describing what you want.",
      technologies: "Next.js · AI · TypeScript",
      slug: "website-builder",
    },
    {
      title: "Resume AI",
      description: "Build and improve your resume with AI.",
      technologies: "Next.js · AI · PDF",
       slug: "resume-ai",
    },
    {
      title: "SecondBrain",
      description: "Chat with your personal knowledge base.",
      technologies: "Next.js · RAG · AI",
       slug: "secondbrain",
    },
    {
      title: "Interview AI",
      description: "Practice technical interviews with AI.",
      technologies: "Next.js · AI · Chat",
       slug: "interview-ai",
    },
    {
      title: "AI Data Analyst",
      description: "Upload data and discover insights with AI.",
      technologies: "Next.js · AI · Data",
       slug: "data-analyst",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">
      <nav className="relative mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-2xl border border-white/10 bg-white/[0.05] px-6 py-4 shadow-lg shadow-black/10 backdrop-blur-xl">
  <a href="/" className="text-lg font-bold">
    jeckjudb
  </a>

  <div className="hidden gap-6 text-sm text-zinc-400 md:flex">
    <a href="#projects" className="transition hover:text-white">
      Projects
    </a>

    <a href="#about" className="transition hover:text-white">
      About
    </a>

    <a href="#contact" className="transition hover:text-white">
      Contact
    </a>

    <a
      href="https://github.com/jjjjjjeckjudb"
      target="_blank"
      rel="noopener noreferrer"
      className="transition hover:text-white"
    >
      GitHub
    </a>
  </div>
  <button
  onClick={() => setMenuOpen(!menuOpen)}
  className="text-2xl md:hidden"
>
  ☰
</button>

{menuOpen && (
  <div className="absolute right-6 top-20 flex flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900 p-6 text-sm text-zinc-400 md:hidden">
    <a href="#projects" onClick={() => setMenuOpen(false)}>
      Projects
    </a>

    <a href="#about" onClick={() => setMenuOpen(false)}>
      About
    </a>

    <a href="#contact" onClick={() => setMenuOpen(false)}>
      Contact
    </a>

    <a
      href="https://github.com/jjjjjjeckjudb"
      target="_blank"
      rel="noopener noreferrer"
    >
      GitHub
    </a>
  </div>
)}
</nav>
    {/* Hero */}
<section className="relative mx-auto flex min-h-screen max-w-6xl flex-col items-center justify-center overflow-hidden px-6 text-center">
  {/* Background glow */}
  <div className="absolute -left-40 top-40 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />
<div className="absolute -right-40 top-20 h-[550px] w-[550px] rounded-full bg-blue-300/20 blur-[150px]" />
<div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-violet-300/15 blur-[150px]" />

  <div className="relative z-10 flex flex-col items-center">
    <div className="mb-6 flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/70 px-4 py-2 text-sm text-zinc-300 backdrop-blur">
      <span className="h-2 w-2 rounded-full bg-green-400"></span>
      Available for projects
    </div>

    <p className="mb-5 text-sm font-medium uppercase tracking-[0.3em] text-zinc-500">
      AI & Full-Stack Developer
    </p>

    <h1 className="max-w-5xl text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl">
      I build modern
      <span className="block bg-gradient-to-r from-pink-300 via-purple-300 to-sky-300 bg-clip-text text-transparent">
        products with AI.
      </span>
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
      I create fast, useful and beautiful web applications using
      artificial intelligence, Next.js and TypeScript.
    </p>

    <div className="mt-10 flex flex-col gap-4 sm:flex-row">
      <a
        href="#projects"
        className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:scale-105 hover:bg-zinc-200"
      >
        View my projects ↓
      </a>

      <a
        href="https://github.com/jjjjjjeckjudb"
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full border border-zinc-700 bg-zinc-900/50 px-7 py-3 font-medium text-white backdrop-blur transition hover:scale-105 hover:border-zinc-500 hover:bg-zinc-900"
      >
        GitHub ↗
      </a>
    </div>

    <div className="mt-16 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-zinc-600">
      <span>Next.js</span>
      <span>TypeScript</span>
      <span>Tailwind CSS</span>
      <span>AI</span>
      <span>React</span>
    </div>
  </div>
</section>

{/* Projects */}
      <section
        id="projects"
        className="mx-auto max-w-5xl px-6 pb-24"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          My work
        </p>

        <h2 className="mb-10 text-4xl font-bold">
          Projects
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-purple-300/30 hover:bg-white/[0.08] hover:shadow-purple-500/10"
            >
              <h3 className="text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-4 leading-7 text-zinc-400">
                {project.description}
              </p>

              <p className="mt-6 text-sm text-zinc-500">
                {project.technologies}
              </p>

              <Link
  href={`/projects/${project.slug}`}
  className="mt-8 inline-block rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-sky-200 px-5 py-2 text-sm font-semibold text-slate-900 shadow-lg shadow-purple-500/10 transition duration-300 hover:scale-105 hover:shadow-purple-400/20"
>
  View project
</Link>
            </article>
          ))}
        </div>
      </section>
       <section
        id="about"
        className="mx-auto my-24 max-w-5xl rounded-3xl border border-white/10 bg-white/[0.05] px-8 py-16 shadow-xl shadow-black/10 backdrop-blur-xl sm:px-12"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          About me
        </p>

        <h2 className="text-4xl font-bold">
          I like building useful things.
        </h2>

        <div className="mt-8 max-w-3xl space-y-6 text-lg leading-8 text-zinc-400">
          <p>
            I am learning full-stack development and building projects
            with modern web technologies and artificial intelligence.
          </p>

          <p>
            My goal is to create applications that solve real problems,
            look good and are easy to use.
          </p>

          <p>
            Currently I am working with Next.js, React, TypeScript,
            Tailwind CSS and AI APIs.
          </p>
        </div>
      </section>
            {/* Contact */}

      <section
        id="contact"
        className="mx-auto mb-24 max-w-5xl rounded-3xl border border-white/10 bg-gradient-to-br from-pink-300/[0.08] via-purple-300/[0.06] to-sky-300/[0.08] px-8 py-16 shadow-xl shadow-purple-950/20 backdrop-blur-xl sm:px-12"
      >
        <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
          Contact
        </p>

        <h2 className="text-4xl font-bold">
          Have a project in mind?
        </h2>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I am always interested in building interesting projects and
          experimenting with new ideas.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
           href="mailto:zip449722@gmail.com"
            className="rounded-full bg-gradient-to-r from-pink-200 via-purple-200 to-sky-200 px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-purple-500/10 transition duration-300 hover:scale-105 hover:shadow-purple-400/25"
          >
            Email me
          </a>

          <a
            href="https://github.com/jjjjjjeckjudb"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
          >
            GitHub
          </a>
        </div>
      </section>
    </main>
  );
}