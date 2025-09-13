import Spline from "@splinetool/react-spline";
import { useEffect, useRef, useState } from "react";

function Hero() {
  const splineRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const el = splineRef.current;
    if (!el) return;

    const handleLoad = () => {
      setLoaded(true);
    };

    el.addEventListener("load", handleLoad);
    return () => el.removeEventListener("load", handleLoad);
  }, []);
  return (
    <div className="relative w-full h-[100dvh] bg-transparent overflow-hidden flex justify-center items-center border-b">
      <h1
        className="whitespace-nowrap bg-transparent m-0 
             !text-[10rem] sm:!text-[20rem] lg:!text-[30rem] xl:!text-[40rem] 2xl:!text-[50rem] 
             overflow-hidden uppercase highrise tracking-tight text-white 
             font-extrabold drop-shadow-[4px_4px_0_#000000]"
      >
        Comrade
      </h1>

      <Spline
        ref={splineRef}
        className={`d-mobile ${loaded ? "animate-slideUp delay-[3000ms]" : ""}`}
        events-target="local"
        scene="https://prod.spline.design/81aMlP-8XiH6-fAW/scene.splinecode"
      ></Spline>
    </div>
  );
}

export default Hero;
