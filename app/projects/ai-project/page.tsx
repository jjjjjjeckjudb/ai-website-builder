import Link from "next/link";
import Image from "next/image";

export default function AIProjectPage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">AI Project Showcase</h1>
          <p className="text-lg sm:text-xl opacity-90">A deep learning project demonstrating computer vision techniques for real-world applications.</p>
        </div>
      </header>

      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          This project showcases an AI-powered computer vision system that processes and analyzes visual data to extract meaningful insights. The application leverages state-of-the-art neural architectures and is optimized for performance, making it suitable for deployment in production environments.
        </p>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Technology Stack</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700">
          <li className="bg-white p-4 rounded-lg shadow-sm">Python</li>
          <li className="bg-white p-4 rounded-lg shadow-sm">TensorFlow / PyTorch</li>
          <li className="bg-white p-4 rounded-lg shadow-sm">OpenCV</li>
          <li className="bg-white p-4 rounded-lg shadow-sm">React + Next.js</li>
          <li className="bg-white p-4 rounded-lg shadow-sm">Tailwind CSS</li>
          <li className="bg-white p-4 rounded-lg shadow-sm">Docker</li>
        </ul>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Live Demo & Screenshots</h2>
        <div className="space-y-6">
          <div className="relative w-full h-64 sm:h-80 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/images/ai-project-demo.png"
              alt="AI Project Demo Screenshot"
              fill
              className="object-cover"
            />
          </div>
          <p className="text-gray-600 text-sm">
            The demo above shows the application in action. You can also view a live demo below.
          </p>
          <a
            href="https://ai-project-demo.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
          >n            View Live Demo
          </a>
        </div>
      </section>

      <section className="max-w-4xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-semibold mb-4">Source Code</h2>
        <p className="mb-4 text-gray-700">The full source code is available on GitHub. Contributions and feedback are welcome!</p>
        <a
          href="https://github.com/username/ai-project"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-900 text-white font-medium py-2 px-6 rounded-lg transition duration-200"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.228-.015-2.234-3.338.726-4.042-1.61-4.042-1.61C3.6 18.05 2.98 17.75 2.98 17.75c-1.64-.9-.04-1.05.0-1.05 1.79.06 2.74 1.83 2.74 1.83 1.61 2.78 4.21 1.98 5.23 1.52.16-.92.52-1.98 1.04-2.46-3.65-.42-7.5-1.83-7.5-8.15 0-1.79.64-3.25 1.7-4.35-.17-.42-.74-2.11.17-4.4 0 0 1.39-.45 4.57 1.69.94-.26 1.95-.39 2.96-.4 1.01.01 2.02.14 2.97.4 3.18-2.14 4.56-1.68 4.56-1.68.92 1.82.35 3.98.17 4.4 1.07 1.1 1.7 2.55 1.7 4.35 0 6.33-3.86 7.72-7.52 8.14.53.45.99 1.34 1.3 2.52.97-.13 1.9-.38 2.82-.76.09-.62.35-1.93.35-3.04 0-2.21-.02-4.01-.02-4.63 0-3.39 2.4-6.04 5.8-6.04 3.4 0 6 2.6 6 6.01 0 3.39-2.4 6.04-5.8 6.04-1.55 0-3.02-.28-4.34-.83 1.9.59 4.06 1.84 4.06 3.42 0 2.45-2.09 4.43-4.69 4.43-1.39 0-1.88-.57-2.2-1.19 0 2.21-.02 4.01-.02 4.64 0 3.39-2.4 6.04-5.8 6.04-3.4 0-6-2.6-6-6.01 0-3.39 2.4-6.04 5.8-6.04 1.55 0 3.02.28 4.34.83-1.9-.59-4.06-1.84-4.06-3.42 0-2.45 2.09-4.43 4.69-4.43 1.39 0 1.88.57 2.2 1.19 0-2.21.02-4.01.02-4.64z" />
          </svg>
          View on GitHub
        </a>
      </section>

      <footer className="bg-gray-100 py-8 px-4 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <Link href="/" className="text-indigo-600 hover:text-indigo-800 font-medium">
            &larr; Back to Portfolio
          </Link>
        </div>
      </footer>
    </main>
  );
}
