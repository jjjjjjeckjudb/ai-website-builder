 export default function WebsiteBuilder() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <section className="mx-auto max-w-4xl px-6 py-24">
        <a
          href="/"
          className="text-sm text-zinc-500 transition hover:text-white"
        >
          ← Back to home
        </a>

        <div className="mt-16">
          <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
            Featured project
          </p>

          <h1 className="mt-4 text-5xl font-bold tracking-tight sm:text-6xl">
            AI Website Builder
          </h1>

          <p className="mt-6 max-w-2xl text-xl leading-8 text-zinc-400">
            Create modern websites by describing what you want in natural
            language.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              Next.js
            </span>

            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              TypeScript
            </span>

            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              AI
            </span>

            <span className="rounded-full border border-zinc-800 px-4 py-2 text-sm">
              Tailwind CSS
            </span>
          </div>

          <div className="mt-16 rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
            <h2 className="text-2xl font-semibold">
              About the project
            </h2>

            <p className="mt-4 leading-8 text-zinc-400">
              This project allows users to generate website ideas and
              interfaces using artificial intelligence.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}