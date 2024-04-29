import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const StaggerDemo = () => {
  const boxesRef = useRef(null);

  useGSAP(() => {
    gsap.to(boxesRef.current.children, {
      duration: 1,
      y: 100,
      stagger: 0.5, // Delay each animation by 0.2 seconds
      ease: "power3.easeOut", // Ease-out for a smoother finish
    });
  });

  return (
    <div ref={boxesRef} className="flex justify-center">
      <div className="w-16 h-16 m-3 bg-red-500 rounded-md box"></div>
      <div className="w-16 h-16 m-3 bg-orange-500 rounded-md box"></div>
      <div className="w-16 h-16 m-3 rounded-md bg-fuchsia-500 box"></div>
      <div className="w-16 h-16 m-3 bg-yellow-500 rounded-md box"></div>
      <div className="w-16 h-16 m-3 bg-indigo-500 rounded-md box"></div>
    </div>
  );
};

export default StaggerDemo;
