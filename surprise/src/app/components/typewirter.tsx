"use client";
import { useEffect, useState } from "react";
import { text } from "stream/consumers";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";
export function TypewriterEffectSmoothDemo() {
  const initial_words = [
    {
      text: "Hehe vaise to yaha kuch",
    },
    {
      text: "aur tha, but",
    },
    {
      text: "baad m change",
    },
    {
      text: "kr diye.",
    },
  ];
  
  const mediatory_words = [
    {
        text: "Pr koi na bta"
    },
    {
        text: "denge, shi time aane pr"
    }
  ];

  const final_words = [
    {
        text: "But",
        className: "text-red-500 dark:text-red-500",
    },
    {
        text: "tb",
        className: "text-red-500 dark:text-red-500",
    },
    {
        text: "tk....",
        className: "text-red-500 dark:text-red-500",
    },
    {
        text: "\u{1F92B}"
    }
  ];

  const [showMediatory, setShowMediatory] = useState(false);
  const [showFinal, setShowFinal] = useState(false);

  const handleInitialComplete = () => {
    setTimeout(() => setShowMediatory(true), 500); // Adding a small delay for smoothness
  };

  const handleMediatoryComplete = () => {
    setTimeout(() => setShowFinal(true), 500); // Adding a small delay for smoothness
  };


  return (
    <main className="flex flex-col items-center justify-center h-screen w-fit">
      <TypewriterEffectSmooth words={initial_words} onComplete={handleInitialComplete} />
      <TypewriterEffectSmooth words={mediatory_words} onComplete={handleMediatoryComplete}/>

      {showFinal && (
        <p className="flex justify-center text-center">
          <TypewriterEffect words={final_words} />
        </p>
      )}
    </main>
  );
}
