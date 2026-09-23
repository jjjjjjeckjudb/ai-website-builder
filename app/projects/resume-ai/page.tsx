export default function ResumeAI() {
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

        {/* Preview */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="flex min-h-[320px] items-center justify-center rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-pink-300/10 via-purple-300/10 to-sky-300/10 p-8 sm:min-h-[420px]">
            <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.07] p-6 shadow-xl backdrop-blur-xl">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-pink-200 to-purple-200 text-xl text-slate-900">
                  CV
                </div>

                <div>
                  <div className="h-3 w-32 rounded-full bg-white/40" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-white/15" />
                </div>
              </div>

              <div className="space-y-3">
                <div className="h-2 w-full rounded-full bg-white/15" />
                <div className="h-2 w-11/12 rounded-full bg-white/15" />
                <div className="h-2 w-4/5 rounded-full bg-white/15" />
              </div>

              <div className="mt-7 rounded-xl border border-purple-300/20 bg-purple-300/10 p-4 text-sm text-purple-100">
                ✦ AI suggestion: Make your experience more specific and
                results-focused.
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