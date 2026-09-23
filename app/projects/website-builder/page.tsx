export default function WebsiteBuilder() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">
      {/* Pastel background glow */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-sky-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-purple-300/15 blur-[150px]" />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:py-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-purple-300/30 hover:bg-white/[0.1] hover:text-white"
        >
          ← Back to home
        </a>

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

        {/* Project preview */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-pink-300/10 via-purple-300/10 to-sky-300/10 p-8 sm:min-h-[420px]">
            <div className="text-center">
              <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-3xl shadow-xl">
                ✦
              </div>

              <p className="text-sm uppercase tracking-[0.3em] text-zinc-400">
                Project preview
              </p>

              <h2 className="mt-3 text-2xl font-semibold">
                AI Website Builder
              </h2>

              <p className="mx-auto mt-3 max-w-md text-zinc-400">
                A visual preview of the application will appear here.
              </p>
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
          <a
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-purple-200"
          >
            ← Explore other projects
          </a>
        </div>
      </section>
    </main>
  );
}