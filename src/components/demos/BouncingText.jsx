import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Power3 } from "gsap";

const BouncingText = () => {
  const bounceEase = Power3.easeOut.config({ amplitude: 0.5, frequency: 2 }); // Adjust amplitude and frequency

  useGSAP(() => {
    gsap.to("#bounceText", { duration: 1, y: "100px", ease: bounceEase });
  });

  return <h1 id="bounceText">Bouncing Text!</h1>;
};

export default BouncingText;
