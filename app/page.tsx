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
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="relative mx-auto flex max-w-5xl items-center justify-between px-6 py-6">
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

      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-zinc-400">
          AI & Full-Stack Developer
        </p>

        <h1 className="max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
          I build things
          <span className="text-zinc-400"> with AI.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-zinc-400">
          I create modern web applications using AI, Next.js and TypeScript.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
          >
            View projects
          </a>

          <a
            href="https://github.com/jjjjjjeckjudb"
            className="rounded-full border border-zinc-700 px-6 py-3 font-medium transition hover:bg-zinc-900"
          >
            GitHub
          </a>
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
              className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8 transition hover:-translate-y-1 hover:border-zinc-600"
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
  className="mt-8 inline-block rounded-full bg-white px-5 py-2 text-sm font-medium text-black transition hover:bg-zinc-200"
>
  View project
</Link>
            </article>
          ))}
        </div>
      </section>
       <section
        id="about"
        className="mx-auto max-w-5xl px-6 py-24"
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
        className="mx-auto max-w-5xl px-6 py-24"
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
            className="rounded-full bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200"
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