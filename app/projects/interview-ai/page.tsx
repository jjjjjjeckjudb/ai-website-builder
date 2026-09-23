export default function InterviewAI() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">
      {/* Pastel background */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-sky-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-pink-300/15 blur-[150px]" />

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
            AI Interview Project
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Practice interviews.
            <span className="block bg-gradient-to-r from-purple-300 via-pink-300 to-sky-300 bg-clip-text text-transparent">
              Get instant feedback.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Practice technical interviews with an AI interviewer and receive
            feedback to improve your answers.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Next.js", "AI", "Chat"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Interview preview */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#11152d]/60 p-5 sm:p-8">
            {/* Header */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">Frontend Developer Interview</p>
                <p className="mt-1 text-xs text-zinc-500">
                  AI technical interview
                </p>
              </div>

              <div className="rounded-full border border-purple-300/20 bg-purple-300/10 px-4 py-2 text-xs text-purple-200">
                Question 3 of 10
              </div>
            </div>

            {/* Progress */}
            <div className="mt-6 h-2 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[30%] rounded-full bg-gradient-to-r from-purple-300 via-pink-300 to-sky-300" />
            </div>

            {/* Question */}
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.05] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-purple-200">
                AI Interviewer
              </p>

              <h2 className="mt-4 text-xl font-semibold leading-8">
                What is the difference between server-side rendering and
                client-side rendering?
              </h2>
            </div>

            {/* Answer */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="text-xs uppercase tracking-[0.25em] text-zinc-500">
                Your answer
              </p>

              <p className="mt-4 text-sm leading-7 text-zinc-400">
                Server-side rendering generates the page on the server before
                sending it to the browser, while client-side rendering builds
                the interface in the browser using JavaScript.
              </p>
            </div>

            {/* Feedback */}
            <div className="mt-5 rounded-2xl border border-sky-300/20 bg-gradient-to-r from-purple-300/[0.08] to-sky-300/[0.08] p-6">
              <div className="flex items-center justify-between gap-4">
                <p className="text-sm font-semibold text-sky-100">
                  ✦ AI Feedback
                </p>

                <span className="rounded-full bg-emerald-300/10 px-3 py-1 text-xs text-emerald-200">
                  Good answer
                </span>
              </div>

              <p className="mt-4 text-sm leading-7 text-zinc-300">
                Clear explanation. You could improve the answer by mentioning
                SEO, initial page load and hydration.
              </p>
            </div>

            {/* Button */}
            <div className="mt-6 flex justify-end">
              <button className="rounded-full bg-gradient-to-r from-purple-200 via-pink-200 to-sky-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105">
                Next question →
              </button>
            </div>
          </div>
        </div>

        {/* Information */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-purple-200">
              About
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              Practice without pressure
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              Interview AI simulates technical interviews so developers can
              practice answering questions before a real interview.
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
              <p>✦ Technical interview questions</p>
              <p>✦ AI-generated feedback</p>
              <p>✦ Interview progress tracking</p>
              <p>✦ Personalized practice</p>
            </div>
          </div>
        </div>

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