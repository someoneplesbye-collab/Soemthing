import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

export const GameCard = ({ game, onSelect, index }) => {
  const shadowClasses = [
    "hover:shadow-[8px_8px_0px_0px_var(--neon-green)]",
    "hover:shadow-[8px_8px_0px_0px_var(--neon-pink)]",
    "hover:shadow-[8px_8px_0px_0px_var(--neon-blue)]",
  ];

  const shadowClass = shadowClasses[index % shadowClasses.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={() => onSelect(game)}
      className="group relative bg-zinc-900 border border-zinc-800 p-4 cursor-pointer game-card-hover"
    >
      <div className="relative aspect-video mb-4 overflow-hidden bg-emerald-900/10">
        <img
          src={game.thumbnail}
          alt={game.title}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-emerald-500/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <Play fill="currentColor" className="text-emerald-500" size={32} />
        </div>
      </div>
      
      <h3 className="text-xl font-black tracking-tight mb-1 group-hover:text-emerald-400 transition-colors uppercase">
        {game.title}
      </h3>
      <div className="text-zinc-500 text-[10px] uppercase font-bold tracking-widest">
        {game.category}
      </div>
    </motion.div>
  );
}
