export default function Loading() {
  return (
    <div className="h-screen flex items-center justify-center bg-slate-950 text-cyan-400">
      <div className="animate-spin rounded-full h-10 w-10 border-4 border-cyan-400 border-t-transparent"></div>
    </div>
  );
}