import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const ControlMethodsDemo = () => {
  const flairRef = useRef(null);

  const { play, pause, reverse, restart } = useGSAP(() => {
    gsap.fromTo(
      gsap.from(flairRef.current, {
        duration: 3,
        opacity: 0.5,
        x: 100,
      })
    );
  });

  return (
    <div className="container">
      <div ref={flairRef} className="bg-white rounded-md h-14 w-14">
        <p>Flair</p>
      </div>
      <div className="controls">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
        <button onClick={reverse}>Reverse</button>
        <button onClick={restart}>Restart</button>
      </div>
    </div>
  );
};

export default ControlMethodsDemo;
