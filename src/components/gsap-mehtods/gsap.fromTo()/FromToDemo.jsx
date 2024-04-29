import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const FromToDemo = () => {
  const boxRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      boxRef.current,
      {
        duration: 3,
        opacity: 0.5,
        x: 100,
      },
      {
        duration: 3,
        opacity: 1,
        x: -100,
      }
    );
  }, []);

  return (
    <div
      ref={boxRef}
      className="flex items-center justify-center w-20 h-20 text-center text-white rounded-md bg-[#1d0042]"
    >
      Animated box
    </div>
  );
};

export default FromToDemo;
