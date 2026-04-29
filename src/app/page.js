"use client";

import { Avatar,AvatarImage,AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/ui/mode-toggle";
import { useState, useEffect } from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 flex flex-col items-center">
      <div className="self-end">
        <ModeToggle />
      </div>
      <div className="flex-1 flex items-center justify-center">
        <AvatarItems />
      </div>
    </div>
  )
}

export function AvatarItems() {
  return(
    <div className="flex flex-col items-center gap-4">
      <Avatar>
        <AvatarImage src="/lain.jpg" alt="Avatar" />
        <AvatarFallback>P</AvatarFallback>
      </Avatar>
      <h1 className="text-2xl font-semibold">Psyraiser</h1>
      <TerminalProfile />
    </div>
  )
}

function TerminalProfile() {
  const command = "psyraiser";
  const output = "Hello, World";
  
  const [displayedCommand, setDisplayedCommand] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= command.length) {
        setDisplayedCommand(command.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
        setTimeout(() => setShowOutput(true), 300);
        setTimeout(() => setShowCursor(true), 800);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="mt-6 font-[family-name:var(--font-jetbrains-mono),ui-monospace,monospace] text-base w-80">
      <div className="space-y-1">
        <div>
          <span className="text-foreground font-semibold">psy@psyraiser</span>
          <span className="text-muted-foreground">~</span>
          <span className="text-foreground">$</span>{" "}
          <span className="text-foreground">{displayedCommand}</span>
          <span className="inline-block w-2 h-4 bg-foreground animate-pulse ml-0.5 align-middle" />
        </div>
        {showOutput && (
          <div className="text-foreground animate-fade-in">{output}</div>
        )}
        {showCursor && (
          <div>
            <span className="text-foreground font-semibold">psy@psyraiser</span>
            <span className="text-muted-foreground">~</span>
            <span className="text-foreground">$</span>{" "}
            <span className="inline-block w-2 h-4 bg-foreground animate-pulse ml-0.5 align-middle" />
          </div>
        )}
      </div>
    </div>
  )
}