import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ToDemo = () => {
  const boxRef = useRef(null);
  const boxRef2 = useRef(null);

  useGSAP(() => {
    gsap.to(boxRef.current, {
      // Access the actual DOM element from the ref using .current
      duration: 3,
      opacity: 0.5,
      x: 100,
      repeat: -1,
      yoyo: true,
      ease: "back.inOut",
    });
  }, []);
  useGSAP(() => {
    gsap.to(boxRef2.current, {
      duration: 3,
      opacity: 0.5,
      x: 100,
      delay: 2,
      //   repeat: -1,
      //   yoyo: true,
      //   ease: "back.inOut",
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
      <div
        ref={boxRef2}
        className="flex items-center justify-center w-20 h-20 text-center text-white rounded-md bg-[#1d0042]"
      >
        Animated box
      </div>
    </>
  );
};

export default ToDemo;
