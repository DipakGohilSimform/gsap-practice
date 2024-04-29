import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Power3, Bounce, Elastic } from "gsap"; // Import specific eases
import { useRef } from "react";

const EasingDemo = () => {
  const ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline(); // Create a timeline for multiple animations

    tl.to(ref.current, { duration: 1, y: -100, ease: Power3.easeOut }) // Ease out smoothly
      .to(ref.current, { duration: 1, y: 0, ease: Bounce.easeOut }) // Bounce back
      .to(ref.current, {
        duration: 1,
        y: -50,
        ease: Elastic.easeOut.config({ amplitude: 0.5 }),
      }); // Elastic ease with custom amplitude

    return tl; // Return the timeline for cleanup
  });

  return (
    <button
      onClick={() => {
        window.location.reload();
      }}
      ref={ref}
      className="p-3 text-white rounded-md bg-slate-800"
    >
      Animated Element
    </button>
  );
};

export default EasingDemo;
