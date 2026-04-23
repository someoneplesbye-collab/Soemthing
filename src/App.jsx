import React, { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Header from "./components/Header";
import { GameCard } from "./components/GameCard";
import GamePlayer from "./components/GamePlayer";
import gamesData from "./games.json";

export default function App() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [games] = useState(gamesData);

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans grid-bg flex flex-col">
      <Header />

      <div className="flex gap-12 flex-1 max-w-7xl mx-auto w-full px-8 mb-12">
        {/* Sidebar Nav */}
        <nav className="w-64 hidden lg:flex flex-col gap-4 uppercase font-black text-xl tracking-tight">
          <a href="#" className="nav-link-active">All Games</a>
          <a href="#" className="nav-link">Action</a>
          <a href="#" className="nav-link">Sports</a>
          <a href="#" className="nav-link">Puzzle</a>
          <a href="#" className="nav-link">Retro</a>
          <a href="#" className="nav-link font-normal text-zinc-700 text-sm mt-8 lowercase leading-tight">
            No cookies. No tracking. Purely unblocked arcade experience.
          </a>
          <div className="w-12 h-1 bg-zinc-800"></div>
        </nav>

        <main className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {games.map((game, i) => (
              <GameCard 
                key={game.id} 
                game={game} 
                index={i} 
                onSelect={setSelectedGame} 
              />
            ))}
            
            {/* Surprise Me Card */}
            <div 
              onClick={() => setSelectedGame(games[Math.floor(Math.random() * games.length)])}
              className="game-card bg-emerald-500 p-6 flex flex-col justify-between cursor-pointer text-black hover:bg-emerald-400 border border-transparent transition-all group"
            >
              <div className="h-32 bg-black/10 flex items-center justify-center">
                <div className="text-black text-6xl uppercase font-black opacity-20 group-hover:opacity-40 transition-opacity">?</div>
              </div>
              <div className="mt-8">
                <div className="text-2xl font-black tracking-tighter uppercase leading-none">Surprise Me</div>
                <div className="text-xs text-black/60 font-bold uppercase tracking-widest mt-2">Random Game Selection</div>
              </div>
            </div>
          </div>
        </main>
      </div>

      <footer className="mt-auto border-t border-zinc-900 p-8 grid-bg">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-[10px] text-zinc-600 uppercase tracking-[0.3em] font-black italic">
            SECURE CONNECTION • 128-BIT ENCRYPTION • 0.04 MS LATENCY
          </div>
          <div className="flex gap-8 items-center">
             <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_12px_rgba(16,185,129,0.8)]"></div>
                <span className="text-[10px] uppercase font-black text-zinc-500 tracking-widest">Server Status: Online</span>
             </div>
             <div className="text-[10px] uppercase font-black text-zinc-500 tracking-widest bg-zinc-900 px-3 py-1">
               {games.length * 142} Players In-Game
             </div>
          </div>
        </div>
      </footer>

      {/* Fullscreen Player Container */}
      <AnimatePresence>
        {selectedGame && (
          <GamePlayer 
            game={selectedGame} 
            onClose={() => setSelectedGame(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}
