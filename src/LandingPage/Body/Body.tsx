import Hero from "./body-component/HeroSection.tsx";

function Body() {
  return (
    <>
      <div className="absolute inset-0 w-full h-full border-x container mx-auto"></div>
      <div className="fixed inset-0 z-1 w-full h-[100dvh] border-x bg-gradient-to-t from-[#0B0F14] via-transparent via-20% to-transparent mx-auto pointer-events-none"></div>

      <Hero />
    </>
  );
}

export default Body;
