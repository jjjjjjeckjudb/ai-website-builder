"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const projects = [
  { title: "AI Website Builder", slug: "website-builder" },
  { title: "Resume AI", slug: "resume-ai" },
  { title: "SecondBrain", slug: "secondbrain" },
  { title: "Interview AI", slug: "interview-ai" },
  { title: "AI Data Analyst", slug: "data-analyst" },
];

function Logo() {
  return (
    <a href="#about" className="flex items-center gap-3">
      <svg
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M8 26V8H19C24 8 27 11 27 16C27 21 24 24 19 24H13"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13 13H19C21 13 22 14 22 16C22 18 21 19 19 19H13"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <span className="text-xl font-bold tracking-tight">Plety</span>
    </a>
  );
}

function FadeInUp({ children }: { children: React.ReactNode }) {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-all duration-1000 ease-out ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-10 opacity-0"
      }`}
    >
      {children}
    </div>
  );
}
export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const faqs = [
  {
    question: "What is Plety?",
    answer:
      "Plety is an AI-focused platform concept designed to make intelligent tools simple, accessible, and useful in everyday workflows.",
  },
  {
    question: "How does AI Chat work?",
    answer:
      "AI Chat uses conversational AI to help answer questions, generate ideas, and work through tasks. You can explore a working AI chat project in our portfolio.",
  },
  {
    question: "Can Plety transcribe audio?",
    answer:
      "The transcription interface shown on this page is currently a design preview. Live audio transcription has not been connected yet.",
  },
  {
    question: "Can I try the AI projects?",
    answer:
      "Yes. Scroll to the projects section and open any available application to explore its features.",
  },
  {
    question: "How can I get in touch?",
    answer:
      "You can contact us using the email link in the footer.",
  },
];
  const links = [
    { label: "About", href: "#about" },
    { label: "Features", href: "#features" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-white/10 bg-black/80 backdrop-blur-md"
            : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          <Logo />

          <div className="hidden items-center gap-8 md:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-300 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            href="#projects"
            className="hidden rounded-full border border-white/5 bg-[#1F1F22] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2A2A2D] md:inline-flex"
          >
            Get started
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="text-2xl md:hidden"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        <div
          className={`grid overflow-hidden bg-black/95 transition-all duration-300 md:hidden ${
            menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <div className="flex flex-col gap-5 border-t border-white/10 px-6 py-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-medium text-gray-300"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#projects"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-white"
              >
                Get started
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="about"
        className="relative isolate flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pb-20 pt-32 text-center"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-90"
        >
          <source
            src="https://cdn.sceneai.art/Hero%20Section%20Video/50b4f304-cdca-4e12-8735-580d225834be.mp4"
            type="video/mp4"
          />
        </video>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black/30 via-transparent to-black" />

        <div className="mb-8 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs font-medium text-gray-300 backdrop-blur-sm">
          ✨ Announcing API 2.0
        </div>

        <h1 className="mb-6 max-w-5xl text-center text-5xl font-medium tracking-tight md:text-7xl">
          The intelligence layer
          <span className="block">
            for clear{" "}
            <span className="font-serif font-normal italic">
              decisions.
            </span>
          </span>
        </h1>

        <p className="max-w-2xl text-center text-[16px] leading-7 text-gray-400">
          Our platform integrates seamlessly into your stack to deliver
          real-time understanding, not just predictions.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
  <a
    href="#projects"
    className="rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
  >
    Get started
  </a>
            <a
            href="#features"
            className="rounded-full border border-white/5 bg-[#1F1F22] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2A2A2D]"
          >
            Learn more
          </a>
        </div>

        <p className="mt-24 text-center text-sm font-medium text-gray-500">
          Trusted by industry leaders
        </p>
        <div className="mt-10 w-full max-w-5xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
  <div className="plety-marquee flex w-max items-center">
    {Array.from({ length: 4 }).map((_, repeat) => (
      <div
        key={repeat}
        className="flex shrink-0 items-center"
        aria-hidden={repeat > 0}
      >
        {["Springfield", "Orbitc", "Cloud", "Amster", "Nexus"].map(
          (brand) => (
            <div
              key={brand}
              className="flex w-44 shrink-0 items-center justify-center gap-2 px-8 text-xl font-semibold tracking-tight text-white/50"
            >
              <span className="text-2xl">✳</span>
              {brand}
            </div>
          )
        )}
      </div>
    ))}
  </div>
</div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-7xl px-6 py-24">
        <h2 className="mb-10 text-4xl font-semibold">
          Explore our AI projects
        </h2>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group rounded-3xl border border-white/10 bg-[#111113] p-8 transition hover:border-white/30 hover:bg-[#1C1C1E]"
            >
              <h3 className="text-xl font-semibold">
                {project.title}
              </h3>

              <p className="mt-8 text-sm text-gray-400 transition group-hover:text-white">
                Open project ↗
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* Features */}
     <section
  id="features"
  className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-32 lg:grid-cols-2"
>
 {/* Left: text */}
  <div>
    <div className="mb-7 inline-flex rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-sm text-yellow-300">
      ✨ AI chat
    </div>

    <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
      Where speed meets intelligent conversation.
    </h2>

    <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
      A conversational AI assistant that understands your questions,
      provides intelligent answers, and helps you get things done fast
      from casual chats to complex tasks.
    </p>

    <a
      href="/projects/secondbrain"
      className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
    >
      Get started ↗
    </a>
  </div>
  {/* Left: text */}
<FadeInUp>
  <div>
    {/* Здесь остаётся весь существующий текст AI Chat */}
  </div>
</FadeInUp>

{/* Right: video and chat mockup */}

  {/* Right: video and chat mockup */}
  <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#101014] p-5 md:p-10">
    <video
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-60"
    >
      <source
        src="https://cdn.sceneai.art/Hero%20Section%20Video/1bcc8fa3-37f6-4c53-8591-0347e4c7f8ac.mp4"
        type="video/mp4"
      />
    </video>

    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/15 bg-[#141416]/85 p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-10 flex items-center justify-between">
        <span className="text-sm font-semibold">✳ Plety AI</span>
        <span className="text-xs text-gray-400">● Online</span>
      </div>

      <div className="mb-5 rounded-2xl bg-white/10 p-4 text-sm text-gray-200">
        How can I make my workflow more productive?
      </div>

      <div className="mb-8 rounded-2xl border border-white/10 bg-black/40 p-4 text-sm leading-7 text-gray-300">
        Start by identifying repetitive tasks, prioritizing your goals,
        and using AI tools to automate routine work.
      </div>

      <div className="mb-5 flex flex-wrap gap-2">
        {["Write content", "Analyze data", "Generate ideas"].map((item) => (
          <span
            key={item}
            className="rounded-full border border-white/15 px-3 py-2 text-xs text-gray-300"
          >
            {item}
          </span>
        ))}
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 px-4 py-4">
        <span className="text-sm text-gray-500">Ask anything...</span>
        <div className="flex gap-3 text-gray-300">
          <span aria-hidden="true">🎙</span>
          <span aria-hidden="true">〰</span>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* AI Transcription */}
<section className="mx-auto grid max-w-7xl items-center gap-16 px-6 py-24 lg:grid-cols-2">
  {/* Left: video mockup */}
  <div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-3xl border border-white/10 bg-[#101014] p-5 md:p-10">
    <video
      autoPlay
      muted
      loop
      playsInline
      aria-hidden="true"
      className="absolute inset-0 h-full w-full object-cover opacity-60"
    >
      <source
        src="https://cdn.sceneai.art/Hero%20Section%20Video/736fd4a0-70ac-4f44-9633-55769ead6aca.mp4"
        type="video/mp4"
      />
    </video>

    <div className="absolute inset-0 bg-black/30" />

    <div className="relative z-10 w-full max-w-md rounded-3xl border border-white/15 bg-[#141416]/85 p-6 shadow-2xl backdrop-blur-xl">
      <div className="mb-6 flex items-center justify-between">
        <span className="text-sm font-semibold">Voice transcription</span>
        <span className="rounded-full bg-green-400/10 px-3 py-1 text-xs text-green-300">
          ● Completed
        </span>
      </div>

      <div className="mb-6 flex items-center gap-4">
        <button
          type="button"
          aria-label="Audio preview"
          disabled
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-lg text-black"
        >
          ▶
        </button>

        <div className="min-w-0 flex-1">
          <p className="text-sm font-medium">11:06 AM – Chris</p>
          <p className="mt-1 text-xs text-gray-400">
            Recording preview · 02:34
          </p>
        </div>
      </div>

      {/* Decorative waveform */}
      <div
        className="mb-7 flex h-16 items-center justify-center gap-1 overflow-hidden"
        aria-hidden="true"
      >
        {Array.from({ length: 45 }).map((_, i) => (
          <span
            key={i}
            className="w-1 shrink-0 rounded-full bg-green-300/80"
            style={{
              height: `${Math.round(12 + Math.abs(Math.sin(i * 1.7)) * 42)}px`,
}}
          />
        ))}
      </div>

      <div className="border-t border-white/10 pt-5">
        <div className="mb-4 flex items-center justify-between">
          <span className="text-sm font-semibold">Transcript</span>
          <span className="text-xs text-gray-500">English</span>
        </div>

        <p className="text-sm leading-7 text-gray-300">
          <span className="mr-2 text-xs text-green-300">00:04</span>
          Hi everyone, thanks for joining today. Let&apos;s go over
          the key updates and talk about our next steps.
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-300">
          <span className="mr-2 text-xs text-green-300">00:18</span>
          We&apos;ve made great progress this week, and I&apos;d
          like to share a few ideas for improving our workflow.
        </p>
      </div>
    </div>
  </div>

  {/* Right: description */}
  <div>
    <div className="mb-7 inline-flex rounded-full border border-green-400/20 bg-green-400/10 px-4 py-2 text-sm text-green-300">
      ✨ AI transcription
    </div>

    <h2 className="max-w-xl text-4xl font-medium leading-tight tracking-tight md:text-6xl">
      Turn speech into text with speed and precision.
    </h2>

    <p className="mt-7 max-w-lg text-base leading-8 text-gray-400">
      Automatically convert speech into accurate, editable text in real
      time. Perfect for meetings, interviews, voice notes, and more,
      powered by advanced speech recognition technology.
    </p>

    <a
      href="#projects"
      className="mt-9 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
    >
      Get started ↗
    </a>
  </div>
</section>
      {/* FAQ */}
      {/* FAQ */}
<section id="faq" className="mx-auto max-w-3xl px-6 py-32">
  <FadeInUp>
    <div className="mb-14 text-center">
      <p className="mb-4 text-sm text-gray-400">FAQ</p>

      <h2 className="text-4xl font-medium tracking-tight md:text-6xl">
        We&apos;ve got answers
      </h2>
    </div>
  </FadeInUp>

  <div className="overflow-hidden rounded-xl border border-white/10">
    {faqs.map((faq, index) => {
      const isOpen = openFaq === index;

      return (
        <div
          key={faq.question}
          className={
            index !== faqs.length - 1
              ? "border-b border-white/10"
              : ""
          }
        >
          <button
            type="button"
            onClick={() => setOpenFaq(isOpen ? null : index)}
            aria-expanded={isOpen}
            className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left"
          >
            <span className="text-base font-medium text-white md:text-lg">
              {faq.question}
            </span>

            <span
              className={`shrink-0 text-2xl text-gray-400 transition-transform duration-300 ${
                isOpen ? "rotate-45" : ""
              }`}
              aria-hidden="true"
            >
              +
            </span>
          </button>

          <div
            className={`grid transition-[grid-template-rows] duration-500 ease-in-out ${
              isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
            }`}
          >
            <div className="min-h-0 overflow-hidden">
              <p className="px-6 pb-6 text-sm leading-7 text-gray-400 md:text-base">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      );
    })}
  </div>
</section>

      {/* Footer */}
      {/* Footer */}
<footer
  id="contact"
  className="relative isolate overflow-hidden bg-black px-6 pt-32"
>
  {/* Video background */}
  <video
    autoPlay
    muted
    loop
    playsInline
    aria-hidden="true"
    className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
  >
    <source
      src="https://cdn.sceneai.art/Hero%20Section%20Video/50b4f304-cdca-4e12-8735-580d225834be.mp4"
      type="video/mp4"
    />
  </video>

  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-black via-black/70 to-black" />

  <div className="relative mx-auto max-w-7xl">
    {/* Big CTA */}
    <div className="mb-32 text-center">
      <p className="mb-6 text-sm text-gray-400">
        Build smarter with AI
      </p>

      <h2 className="mx-auto max-w-4xl text-5xl font-medium leading-tight tracking-tight md:text-7xl">
        Ready to automate{" "}
        <span className="font-serif font-normal italic">
          everything?
        </span>
      </h2>

      <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-gray-400">
        Explore intelligent tools designed to make everyday work
        simpler, faster, and more productive.
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <a
          href="#projects"
          className="rounded-full bg-white px-7 py-3 text-sm font-medium text-black transition hover:bg-gray-200"
        >
          Get started
        </a>

        <a
          href="#features"
          className="rounded-full border border-white/10 bg-[#1F1F22] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2A2A2D]"
        >
          Learn more
        </a>
      </div>
    </div>

    {/* Footer columns */}
    <div className="grid gap-12 border-t border-white/10 py-16 sm:grid-cols-2 lg:grid-cols-4">
      {/* Brand */}
      <div>
        <Logo />

        <p className="mt-6 max-w-xs text-sm leading-7 text-gray-400">
          Speed, scale, and smarts — deployed.
        </p>
      </div>

      {/* Product */}
      <div>
        <h3 className="mb-6 text-sm font-semibold text-white">
          Product
        </h3>

        <div className="flex flex-col items-start gap-4 text-sm text-gray-400">
          <a href="#about" className="transition hover:text-white">
            About
          </a>

          <a href="#projects" className="transition hover:text-white">
            Projects
          </a>

          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="mailto:zip449722@gmail.com" className="transition hover:text-white">
            Contact
          </a>
        </div>
      </div>

      {/* Legal */}
      <div>
        <h3 className="mb-6 text-sm font-semibold text-white">
          Legal
        </h3>

        <div className="flex flex-col items-start gap-4 text-sm text-gray-400">
          <span className="text-gray-500">
            Terms of service — coming soon
          </span>

          <span className="text-gray-500">
            Privacy policy — coming soon
          </span>

          <span className="text-gray-500">
            404 page — coming soon
          </span>
        </div>
      </div>

      {/* Connect */}
      <div>
        <h3 className="mb-6 text-sm font-semibold text-white">
          Connect
        </h3>

        <div className="flex flex-col items-start gap-4 text-sm text-gray-400">
          <a
            href="https://github.com/jjjjjjeckjudb"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
          >
            GitHub ↗
          </a>

          <a
            href="mailto:zip449722@gmail.com"
            className="transition hover:text-white"
          >
            Email ↗
          </a>

          <span className="text-gray-500">
            Instagram — coming soon
          </span>

          <span className="text-gray-500">
            LinkedIn — coming soon
          </span>
        </div>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-xs text-gray-500 md:flex-row md:items-center md:justify-between">
      <p>© 2026 Plety. All rights reserved.</p>

      <p>
        by <span className="text-gray-200">Re-text</span>
        {" · "}
        Made in <span className="text-gray-200">Gemini</span>
      </p>
    </div>
  </div>
</footer>
    </main>
  );
}

            