// import FromToDemo from "./components/gsap-mehtods/gsap.fromTo()/FromToDemo";
// import SetDemo from "./components/gsap-mehtods/gsap.set()/SetDemo";
// import ToDemo from "./components/gsap-mehtods/gsap.to()/ToDemo";
// import TimelineDemo from "./components/gsap-timeline/TimelineDemo";
// import EasingDemo from "./components/demos/EasingDemo";

// import ControlMethodsDemo from "./components/control-methods/ControlMethodsDemo";

import StaggerDemo from "./components/demos/StaggerDemo";
// import LettersAnimation from "./components/demos/LettersAnimation";

function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen bg-[#1d0042]">
        <h1 className="mb-10 text-[#0ae448] text-5xl font-bold">
          Gsap Tutorial
        </h1>
        <div className="flex items-center justify-center w-[700px] rounded-lg h-96 primary-garadient mb-5">
          {/* <ToDemo /> */}
          {/* <FromToDemo /> */}
          {/* <SetDemo /> */}
          {/* <TimelineDemo /> */}
          {/* <EasingDemo /> */}
          <StaggerDemo />
          {/* <LettersAnimation /> */}
          {/* <ControlMethodsDemo /> */}
        </div>
        <button
          onClick={() => {
            window.location.reload();
          }}
          className="p-3 text-[#1d0042] font-semibold rounded-md bg-[#0ae448]"
        >
          Restart
        </button>
      </div>
    </>
  );
}

export default App;
