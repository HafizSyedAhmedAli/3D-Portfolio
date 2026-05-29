import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-5 bg-black text-white">
      <p className="text-emerald-400 font-mono text-sm tracking-widest uppercase mb-4">
        404 — Page Not Found
      </p>
      <h1 className="text-5xl md:text-7xl font-bold mb-4">
        Lost in the stack.
      </h1>
      <p className="text-white/40 text-base md:text-lg mb-10">
        This page doesn't exist or was moved.
      </p>
      <Link
        href="/"
        className="px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 transition-all duration-300 font-semibold text-black text-sm tracking-wide"
      >
        Back to Home
      </Link>
    </main>
  );
}