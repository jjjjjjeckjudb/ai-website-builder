"use client";

import { useMemo, useRef, useState } from "react";

type SalesRow = { month: string; revenue: number; orders: number };

function parseSales(text: string): SalesRow[] {
  const rows: string[][] = [];
  let row: string[] = [], field = '', quoted = false;
  const input = text.replace(/^\uFEFF/, '');
  for (let i = 0; i < input.length; i++) {
    const char = input[i];
    if (char === '"') {
      if (quoted && input[i + 1] === '"') { field += '"'; i++; }
      else if (quoted || field.length === 0) quoted = !quoted;
      else throw new Error('Invalid quotes in CSV.');
    } else if (char === ',' && !quoted) { row.push(field); field = ''; }
    else if ((char === '\n' || char === '\r') && !quoted) {
      row.push(field);
      if (row.some(cell => cell.trim())) rows.push(row);
      row = []; field = '';
      if (char === '\r' && input[i + 1] === '\n') i++;
    } else field += char;
  }
  if (quoted) throw new Error('An unclosed quote was found in the CSV.');
  row.push(field);
  if (row.some(cell => cell.trim())) rows.push(row);
  const headers = rows.shift()?.map(cell => cell.trim().toLowerCase()) ?? [];
  const columns = ['month', 'revenue', 'orders'].map(name => headers.indexOf(name));
  if (columns.some(index => index < 0)) throw new Error('For sales charts, upload a CSV with Month, Revenue and Orders columns. You can still ask AI about other datasets.');
  if (!rows.length) throw new Error('The CSV has headers but no data rows.');
  return rows.map((cells, index) => {
    const [month, revenueText, ordersText] = columns.map(column => cells[column]?.trim() ?? '');
    const revenue = Number(revenueText), orders = Number(ordersText);
    if (cells.length !== headers.length || !month || !revenueText || !ordersText || !Number.isFinite(revenue) || revenue < 0 || !Number.isSafeInteger(orders) || orders < 0) {
      throw new Error('Invalid sales data in row ' + (index + 2) + '. Use a month, a non-negative revenue and a whole number of orders.');
    }
    return { month, revenue, orders };
  });
}

const formatNumber = (value: number) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value);

export default function DataAnalyst() {
  const [fileName, setFileName] = useState("");
const [csvData, setCsvData] = useState("");
const [question, setQuestion] = useState("");
const [insight, setInsight] = useState("");
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState("");
const requestPending = useRef(false);
const [isReading, setIsReading] = useState(false);
const sales = useMemo(() => {
  if (!csvData.trim()) return { rows: [] as SalesRow[], error: '' };
  try { return { rows: parseSales(csvData), error: '' }; }
  catch (error) { return { rows: [] as SalesRow[], error: error instanceof Error ? error.message : 'Cannot read sales data.' }; }
}, [csvData]);
const totalRevenue = sales.rows.reduce((sum, row) => sum + row.revenue, 0);
const totalOrders = sales.rows.reduce((sum, row) => sum + row.orders, 0);
const maxRevenue = Math.max(0, ...sales.rows.map(row => row.revenue));
const analyzeData = async () => {
  if (!csvData.trim() || !question.trim() || requestPending.current || isReading) return;
  requestPending.current = true;

  setIsLoading(true);
  setError("");
  setInsight("");

  try {
    const response = await fetch("/api/analyze-data", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        csvData,
        question,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Could not analyze data.");
    }

    if (typeof data.message !== 'string') throw new Error('The server returned an invalid response.');
    setInsight(data.message);
  } catch (error) {
    setError(
      error instanceof Error
        ? error.message
        : "Something went wrong. Please try again."
    );
  } finally {
    requestPending.current = false;
    setIsLoading(false);
  }
};
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

        {/* CSV Upload */}
<div className="mt-12 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
  <p className="text-sm font-semibold text-sky-200">
    Upload your dataset
  </p>

  <p className="mt-2 text-sm text-zinc-400">
    Select a CSV file to analyze.
  </p>

  <input
    type="file"
    accept=".csv,text/csv"
    aria-label="Upload CSV dataset"
    disabled={isLoading || isReading}
    onChange={async (e) => {
      const file = e.target.files?.[0];
      if (!file) return;

      setIsReading(true);
      setFileName(''); setCsvData(''); setInsight(''); setError('');
      try {
        const text = await file.text();
        if (!text.trim()) throw new Error('This file is empty. Select a CSV with data.');
        setCsvData(text); setFileName(file.name);
      } catch (error) {
        setError(error instanceof Error ? error.message : 'Could not read the file.');
      } finally { setIsReading(false); }
    }}
    className="mt-5 block w-full text-sm text-zinc-300 file:mr-4 file:rounded-full file:border-0 file:bg-sky-200 file:px-5 file:py-3 file:font-semibold file:text-slate-900 hover:file:bg-sky-100"
  />

  {fileName && (
    <p className="mt-4 text-sm text-emerald-200">
      ✓ Loaded: {fileName}
    </p>
  )}
</div>
        {/* CSV Preview */}
{csvData && (
  <div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
    <p className="text-sm font-semibold text-sky-200">
      Dataset preview
    </p>

    <div className="mt-4 overflow-x-auto">
      <pre className="whitespace-pre text-sm leading-7 text-zinc-300">
        {csvData.split(/\r?\n/).slice(0, 6).join("\n")}
      </pre>
    </div>

    <p className="mt-4 text-xs text-zinc-500">
      Showing the first 6 lines of your CSV file.
    </p>
  </div>
)}
        {/* AI Data Analysis */}
<div className="mt-6 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl">
  <p className="text-sm font-semibold text-sky-200">
    Ask AI about your data
  </p>

  <textarea
    aria-label="Question about your dataset"
    disabled={isLoading}
    value={question}
    onChange={(e) => setQuestion(e.target.value)}
    placeholder="Example: Which month had the highest revenue?"
    rows={3}
    className="mt-4 w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-sm text-white outline-none placeholder:text-zinc-500 focus:border-sky-300/40"
  />

  <button
    type="button"
    onClick={analyzeData}
    disabled={!csvData.trim() || !question.trim() || isLoading || isReading}
    className="mt-4 rounded-full bg-gradient-to-r from-sky-200 via-purple-200 to-pink-200 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
  >
    {isLoading ? "Analyzing..." : "Analyze data →"}
  </button>

  {error && (
    <p className="mt-4 text-sm text-red-300">{error}</p>
  )}

  {insight && (
    <div className="mt-6 rounded-2xl border border-purple-300/20 bg-purple-300/[0.08] p-5">
      <p className="text-sm font-semibold text-purple-200">
        ✦ AI Analysis Result
      </p>
      <p className="mt-3 whitespace-pre-line text-sm leading-7 text-zinc-300">
        {insight}
      </p>
    </div>
  )}
</div>
        {/* Sales dashboard calculated from the uploaded CSV */}
        <section aria-label="Sales analytics" className="mt-12 rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-xl sm:p-8">
          <h2 className="text-xl font-semibold">Sales Analytics</h2>
          <p className="mt-2 break-all text-sm text-zinc-400">{fileName || 'Upload a CSV to see your sales metrics.'}</p>
          {sales.error && <p role="status" className="mt-4 text-sm text-amber-200">{sales.error}</p>}
          {sales.rows.length > 0 && <>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              {[
                { label: 'Total revenue', value: formatNumber(totalRevenue) },
                { label: 'Total orders', value: formatNumber(totalOrders) },
                { label: 'Average order value', value: totalOrders > 0 ? formatNumber(totalRevenue / totalOrders) : '—' },
              ].map(stat => <div key={stat.label} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] p-5">
                <p className="text-sm text-zinc-300">{stat.label}</p>
                <p className="mt-3 break-words text-3xl font-semibold text-sky-100">{stat.value}</p>
              </div>)}
            </div>
            <p className="mt-3 text-xs text-zinc-400">Average order value = total revenue / total orders. Revenue uses the units in your file.</p>
            <div className="mt-6 rounded-2xl border border-white/10 bg-[#11152d]/60 p-5">
              <h3 className="font-medium">Revenue by month</h3>
              <p className="mt-1 text-xs text-zinc-400">Rows are shown in the same order as your CSV.</p>
              <div className="mt-6 overflow-x-auto">
                <div className="flex gap-4" style={{ minWidth: sales.rows.length * 90 }}>
                  {sales.rows.map((row, index) => <div key={index} className="min-w-0 flex-1 text-center">
                    <p className="mb-2 text-xs text-sky-100">{formatNumber(row.revenue)}</p>
                    <div className="flex h-48 items-end justify-center border-b border-white/20">
                      <div role="img" aria-label={row.month + ': ' + formatNumber(row.revenue)} title={row.month + ': ' + formatNumber(row.revenue)} className="w-3/4 rounded-t-lg bg-gradient-to-t from-purple-400/60 to-sky-200" style={{ height: maxRevenue > 0 ? (row.revenue / maxRevenue) * 100 + '%' : '0%' }} />
                    </div>
                    <p className="mt-3 break-words text-xs text-zinc-300">{row.month}</p>
                  </div>)}
                </div>
              </div>
            </div>
          </>}
        </section>

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