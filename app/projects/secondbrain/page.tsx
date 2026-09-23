export default function SecondBrain() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">
      {/* Pastel background */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-purple-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-pink-300/15 blur-[150px]" />

      <section className="relative z-10 mx-auto max-w-5xl px-6 py-12 sm:py-20">
        {/* Back */}
        <a
          href="/"
          className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.05] px-5 py-2 text-sm text-zinc-300 backdrop-blur-xl transition hover:border-sky-300/30 hover:bg-white/[0.1] hover:text-white"
        >
          ← Back to home
        </a>

        {/* Hero */}
        <div className="mt-20">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-sky-200">
            AI Knowledge Project
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Your knowledge.
            <span className="block bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              One AI brain.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            SecondBrain lets you chat with your personal knowledge base and
            quickly find information using artificial intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Next.js", "AI", "RAG"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* AI Chat preview */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#11152d]/60 p-5 sm:p-8">
            <div className="flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <p className="font-semibold">SecondBrain AI</p>
                <p className="mt-1 text-xs text-zinc-500">
                  Your personal knowledge assistant
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-300">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Online
              </div>
            </div>

            <div className="mt-8 space-y-6">
              {/* User message */}
              <div className="flex justify-end">
                <div className="max-w-md rounded-2xl rounded-br-md bg-gradient-to-r from-purple-300/20 to-sky-300/20 px-5 py-4 text-sm text-zinc-200">
                  What were the most important ideas from my notes about AI?
                </div>
              </div>

              {/* AI message */}
              <div className="flex justify-start">
                <div className="max-w-lg rounded-2xl rounded-bl-md border border-white/10 bg-white/[0.06] px-5 py-4">
                  <p className="text-sm leading-7 text-zinc-300">
                    Based on your saved notes, three ideas appear most often:
                    AI agents, retrieval-augmented generation and building
                    useful AI products around real user problems.
                  </p>

                  <div className="mt-4 rounded-xl border border-sky-300/10 bg-sky-300/[0.06] px-4 py-3 text-xs text-sky-200">
                    ✦ Answer generated from your knowledge base
                  </div>
                </div>
              </div>
            </div>

            {/* Input */}
            <div className="mt-8 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3">
              <span className="flex-1 px-2 text-sm text-zinc-500">
                Ask your SecondBrain...
              </span>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-sky-200 via-purple-200 to-pink-200 font-bold text-slate-900">
                ↑
              </div>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-sky-200">
              About
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Your personal knowledge base
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              SecondBrain is designed to organize personal information and
              make it searchable through a conversational AI interface.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
              Features
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              What it can do
            </h2>

            <div className="mt-4 space-y-3 text-zinc-400">
              <p>✦ Search personal knowledge</p>
              <p>✦ Ask questions in natural language</p>
              <p>✦ AI answers based on saved information</p>
              <p>✦ RAG-powered retrieval</p>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-8">
          <a
            href="/#projects"
            className="text-sm text-zinc-400 transition hover:text-sky-200"
          >
            ← Explore other projects
          </a>
        </div>
      </section>
    </main>
  );
}