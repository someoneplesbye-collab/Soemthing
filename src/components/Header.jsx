import { Gamepad2, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex justify-between items-start mb-16 p-8 bg-zinc-950/50 backdrop-blur-sm border-b border-zinc-900 grid-bg">
      <div className="flex flex-col">
        <h1 className="text-[110px] font-[900] tracking-tighter leading-[0.8] uppercase mb-4 text-white">
          Unblocked
        </h1>
        <div className="flex gap-4 items-center">
          <span className="bg-emerald-500 text-black px-3 py-1 font-bold text-xs uppercase">
            Active Servers: 12
          </span>
          <span className="border border-zinc-700 px-3 py-1 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">
            Arcade Nova / v4.0.2
          </span>
        </div>
      </div>
      <div className="text-right p-4">
        <div className="text-zinc-500 text-sm font-mono mb-2">SYSTEM_CLOCK</div>
        <div className="text-emerald-400 text-4xl font-black">
          {new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
        </div>
      </div>
    </header>
  );
}
