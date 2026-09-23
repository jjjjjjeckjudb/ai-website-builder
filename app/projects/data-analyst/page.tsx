export default function DataAnalyst() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <a href="/" className="text-sm text-zinc-500 hover:text-white">
          ← Back to home
        </a>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Project
          </p>

          <h1 className="mt-4 text-5xl font-bold">AI Data Analyst</h1>

          <p className="mt-6 text-xl leading-8 text-zinc-400">
            Upload data and discover insights using artificial intelligence.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              Next.js
            </span>
            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              AI
            </span>
            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              Data
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}