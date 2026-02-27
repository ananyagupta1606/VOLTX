export default function Toast({ message, icon }) {
  if (!message) return null;
  return (
    <div className="fixed bottom-5 right-5 z-[60] bg-gray-800 border border-cyan-400/30 text-white text-sm px-4 py-3 rounded-xl flex items-center gap-2.5 shadow-2xl max-w-xs animate-fade-up">
      <span className="text-base">{icon}</span>
      <span>{message}</span>
    </div>
  );
}
