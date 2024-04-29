import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const LettersAnimation = () => {
  const lettersRef = useRef(null);

  useGSAP(() => {
    gsap.to(lettersRef.current.children, {
      duration: 1,
      y: 100,
      stagger: 0.2, // Delay each animation by 0.2 seconds
      ease: "power3.easeOut", // Ease-out for a smoother finish
    });
  });

  return (
    <div ref={lettersRef}>
      <span>L</span>
      <span>E</span>
      <span>T</span>
      <span>T</span>
      <span>E</span>
      <span>R</span>
      <span>S</span>
    </div>
  );
};

export default LettersAnimation;
