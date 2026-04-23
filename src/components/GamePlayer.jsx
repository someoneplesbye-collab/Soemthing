import React, { useState, useRef } from "react";
import { motion } from "motion/react";
import { X, Maximize2, RotateCcw } from "lucide-react";

export default function GamePlayer({ game, onClose }) {
  const [isLoading, setIsLoading] = useState(true);
  const iframeRef = useRef(null);

  const resetGame = () => {
    if (iframeRef.current) {
      iframeRef.current.src = game.url;
      setIsLoading(true);
    }
  };

  const toggleFullscreen = () => {
    if (iframeRef.current) {
      if (iframeRef.current.requestFullscreen) {
        iframeRef.current.requestFullscreen();
      }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 flex flex-col pt-16"
    >
      <div className="absolute top-0 inset-x-0 h-16 border-b border-zinc-800 bg-zinc-900 px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-2xl font-bold tracking-tight text-[var(--neon-green)]">
            {game.title}
          </h2>
          <span className="text-xs font-mono text-zinc-500 uppercase">
            Playing Now
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={resetGame}
            className="p-2 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
            title="Restart Game"
          >
            <RotateCcw size={20} />
          </button>
          <button
            onClick={toggleFullscreen}
            className="p-2 hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-white"
            title="Fullscreen"
          >
            <Maximize2 size={20} />
          </button>
          <div className="w-px h-6 bg-zinc-800 mx-2" />
          <button
            onClick={onClose}
            className="p-2 bg-zinc-800 hover:bg-red-500 transition-colors text-white rounded"
          >
            <X size={20} />
          </button>
        </div>
      </div>

      <div className="relative flex-1 bg-zinc-950">
        {isLoading && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-zinc-950">
            <div className="w-16 h-1 w-48 bg-zinc-900 mb-4 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[var(--neon-green)]"
                animate={{ x: ["-100%", "100%"] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              />
            </div>
            <p className="font-mono text-xs text-zinc-500 uppercase tracking-widest">
              Loading Arcade Engine...
            </p>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src={game.url}
          className="w-full h-full border-none"
          onLoad={() => setIsLoading(false)}
          allow="fullscreen; autoplay"
        />
      </div>

      <div className="p-4 bg-zinc-900 border-t border-zinc-800 text-center">
        <p className="text-xs text-zinc-500 font-mono italic">
          Tip: Most games work better in Fullscreen mode. Enjoy!
        </p>
      </div>
    </motion.div>
  );
}
