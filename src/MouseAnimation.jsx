import { useRef, useEffect } from "react";
import gsap from "gsap";

const MouseFollower = () => {
  // Reference to the follower element
  const followerRef = useRef(null);

  // Function to handle mouse movement
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;

    // Use GSAP to animate the follower element to the mouse position
    gsap.to(followerRef.current, {
      x: clientX,
      y: clientY,
      duration: 0.5, // Smooth animation duration (adjust as desired)
      ease: "power2.out", // Easing function for smooth transition
    });
  };

  // Add event listener on component mount, and clean up on unmount
  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div>
      {/* Follower element */}
      <div
        ref={followerRef}
        style={{
          width: 100,
          height: 100,
          borderRadius: "50%",
          backgroundColor: "red",
          position: "absolute",
          top: -50, // Ensure the follower's positioning is correct
          left: -50,
          pointerEvents: "none", // Prevent interference with mouse events
          zIndex: 1000, // Optional: make sure it's above other elements
        }}
      />
    </div>
  );
};

export default MouseFollower;
