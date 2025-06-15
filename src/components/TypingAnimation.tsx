
import { useState, useEffect } from "react";

interface TypingAnimationProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
}

export const TypingAnimation = ({ 
  texts, 
  typingSpeed = 100, 
  deletingSpeed = 50, 
  pauseDuration = 2000 
}: TypingAnimationProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [isWaiting, setIsWaiting] = useState(false);

  useEffect(() => {
    if (isWaiting) {
      const waitTimer = setTimeout(() => {
        setIsWaiting(false);
        setIsDeleting(true);
      }, pauseDuration);
      return () => clearTimeout(waitTimer);
    }

    const targetText = texts[currentTextIndex];
    
    if (!isDeleting && currentText !== targetText) {
      const timer = setTimeout(() => {
        setCurrentText(targetText.substring(0, currentText.length + 1));
      }, typingSpeed);
      return () => clearTimeout(timer);
    } else if (!isDeleting && currentText === targetText) {
      setIsWaiting(true);
    } else if (isDeleting && currentText !== "") {
      const timer = setTimeout(() => {
        setCurrentText(currentText.substring(0, currentText.length - 1));
      }, deletingSpeed);
      return () => clearTimeout(timer);
    } else if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [currentText, isDeleting, isWaiting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

  return (
    <span className="text-cyan-400">
      {currentText}
      <span className="animate-pulse">|</span>
    </span>
  );
};
