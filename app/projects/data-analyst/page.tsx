export default function DataAnalyst() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#11152d] via-[#181a38] to-[#252653] text-white">
      {/* Pastel background */}
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-sky-300/20 blur-[140px]" />
      <div className="absolute -right-40 top-40 h-[550px] w-[550px] rounded-full bg-pink-300/20 blur-[150px]" />
      <div className="absolute bottom-0 left-1/2 h-[450px] w-[650px] -translate-x-1/2 rounded-full bg-purple-300/15 blur-[150px]" />

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
            AI Data Project
          </p>

          <h1 className="mt-5 max-w-4xl text-5xl font-bold tracking-tight sm:text-7xl">
            Turn your data into
            <span className="block bg-gradient-to-r from-sky-300 via-purple-300 to-pink-300 bg-clip-text text-transparent">
              useful insights.
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-8 text-zinc-300 sm:text-xl">
            Upload your data, explore important metrics and use artificial
            intelligence to discover patterns and insights.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {["Next.js", "AI", "Data"].map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm text-zinc-200 backdrop-blur-xl"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Dashboard preview */}
        <div className="mt-16 rounded-[2rem] border border-white/10 bg-white/[0.05] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-xl">
          <div className="rounded-[1.5rem] border border-white/10 bg-[#11152d]/60 p-5 sm:p-8">
            {/* Dashboard header */}
            <div className="flex flex-col gap-4 border-b border-white/10 pb-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-semibold">Sales Analytics</p>
                <p className="mt-1 text-xs text-zinc-500">
                  sales-data.csv
                </p>
              </div>

              <div className="rounded-full border border-sky-300/20 bg-sky-300/10 px-4 py-2 text-xs text-sky-200">
                ✦ AI Analysis complete
              </div>
            </div>

            {/* Stats */}
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs text-zinc-500">Revenue</p>
                <p className="mt-2 text-2xl font-semibold">$84,250</p>
                <p className="mt-2 text-xs text-emerald-300">↑ 12.4%</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs text-zinc-500">Customers</p>
                <p className="mt-2 text-2xl font-semibold">1,284</p>
                <p className="mt-2 text-xs text-emerald-300">↑ 8.1%</p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-xs text-zinc-500">Orders</p>
                <p className="mt-2 text-2xl font-semibold">2,431</p>
                <p className="mt-2 text-xs text-emerald-300">↑ 15.7%</p>
              </div>
            </div>

            {/* Chart */}
            <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Revenue growth</p>
                  <p className="mt-1 text-xs text-zinc-500">
                    Last 6 months
                  </p>
                </div>

                <span className="text-xs text-zinc-500">USD</span>
              </div>

              <div className="mt-8 flex h-44 items-end gap-3">
                <div className="h-[35%] flex-1 rounded-t-lg bg-sky-300/30" />
                <div className="h-[48%] flex-1 rounded-t-lg bg-sky-300/40" />
                <div className="h-[42%] flex-1 rounded-t-lg bg-purple-300/40" />
                <div className="h-[65%] flex-1 rounded-t-lg bg-purple-300/50" />
                <div className="h-[72%] flex-1 rounded-t-lg bg-pink-300/50" />
                <div className="h-[90%] flex-1 rounded-t-lg bg-gradient-to-t from-purple-300/60 to-pink-200/80" />
              </div>

              <div className="mt-3 grid grid-cols-6 text-center text-xs text-zinc-600">
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
                <span>Jul</span>
                <span>Aug</span>
                <span>Sep</span>
              </div>
            </div>

            {/* AI insight */}
            <div className="mt-5 rounded-2xl border border-purple-300/20 bg-gradient-to-r from-sky-300/[0.08] via-purple-300/[0.08] to-pink-300/[0.08] p-6">
              <p className="text-sm font-semibold text-purple-100">
                ✦ AI Insight
              </p>

              <p className="mt-3 text-sm leading-7 text-zinc-300">
                Revenue increased consistently during the last three months.
                August and September show the strongest growth, while customer
                growth remains positive.
              </p>
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
              Understand data faster
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              AI Data Analyst is designed to make data exploration easier by
              combining visual analytics with AI-generated explanations.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.05] p-8 shadow-xl shadow-black/10 backdrop-blur-xl">
            <p className="text-sm uppercase tracking-[0.3em] text-pink-200">
              Features
            </p>

            <h2 className="mt-4 text-2xl font-semibold">
              What it can do
            </h2>

            <div className="mt-4 space-y-3 text-zinc-400">
              <p>✦ Upload datasets</p>
              <p>✦ Explore key metrics</p>
              <p>✦ Visualize trends</p>
              <p>✦ Generate AI insights</p>
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