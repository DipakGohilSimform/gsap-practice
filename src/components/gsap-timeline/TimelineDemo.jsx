import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TimelineDemo = () => {
  const boxRef = useRef(null);
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(boxRef.current, {
      duration: 3,
      x: 100,
    });
    tl.to(boxRef.current, {
      duration: 3,
      y: 100,
    });
    tl.to(boxRef.current, {
      duration: 3,
      x: -100,
    });
  }, []);

  return (
    <>
      <div
        ref={boxRef}
        className="flex items-center justify-center w-20 h-20 text-center text-white rounded-md bg-[#1d0042]"
      >
        Animated box
      </div>
    </>
  );
};

export default TimelineDemo;
