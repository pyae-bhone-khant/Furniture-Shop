import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center bg-background">
      <div className="relative flex items-center justify-center">
        {/* Outer glowing ring */}
        <div className="absolute h-32 w-32 animate-[spin_3s_linear_infinite] rounded-full border-2 border-primary/20 border-t-primary shadow-[0_0_20px_rgba(var(--primary),0.3)]" />
        
        {/* Inner pulsing orb */}
        <div className="h-16 w-16 animate-pulse rounded-full bg-gradient-to-tr from-primary via-primary/80 to-primary/40 blur-[2px]" />
        
        {/* Decorative floating particles */}
        <div className="absolute h-full w-full">
            <div className="absolute top-0 left-1/2 h-2 w-2 -translate-x-1/2 animate-bounce rounded-full bg-primary/60 delay-150" />
            <div className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 animate-bounce rounded-full bg-primary/60 delay-300" />
        </div>
      </div>

      {/* Elegant Typography */}
      <div className="mt-12 flex flex-col items-center gap-2">
        <h2 className="text-xl font-light tracking-[0.2em] text-foreground/80 uppercase animate-pulse">
          Loading
        </h2>
        <div className="h-[1px] w-24 overflow-hidden bg-muted">
          <div className="h-full w-full origin-left animate-[loading-bar_1.5s_infinite_ease-in-out] bg-primary" />
        </div>
      </div>
    </div>
  );
}