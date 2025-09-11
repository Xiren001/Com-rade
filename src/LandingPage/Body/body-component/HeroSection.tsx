function Hero() {
  return (
    <div className="w-full h-[100dvh] bg-background flex justify-center items-center">
      <h1 className="text-5xl font-bold text-white">hero Section</h1>

      <div className="relative w-[360px] h-[780px] mx-auto rounded-[40px] shadow-[0_0_0_11px_#1f1f1f,0_0_0_13px_#191919,0_0_0_20px_#111] bg-gradient-to-tr from-[#7371ee] to-[#a1d9d6]">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[56%] h-[30px] bg-[#1f1f1f] rounded-b-[40px]"></div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[7px] w-[140px] h-[4px] bg-[#f2f2f2] rounded-[10px]"></div>
        <i className="absolute left-1/2 -translate-x-1/2 translate-y-[6px] top-0 block h-[8px] w-[15%] rounded-[8px] bg-[#101010] shadow-[inset_0_-3px_3px_rgba(255,255,255,0.2)]"></i>
        <b className="absolute top-[4px] left-[220px] block w-[12px] h-[12px] rounded-full bg-[#101010] shadow-[inset_0_-3px_2px_rgba(255,255,255,0.2)]">
          <span className="absolute top-[3px] left-[3px] block w-[6px] h-[6px] rounded-[4px] bg-[#2d4d76] shadow-[inset_0_-2px_2px_rgba(0,0,0,0.5)]"></span>
        </b>
        <s className="absolute top-[50px] w-full text-center text-white text-[70px] font-thin pt-[60px] no-underline">
          10:24
        </s>
        <span className="absolute bottom-[50px] left-[30px] w-[40px] h-[40px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
        <span className="absolute bottom-[50px] right-[30px] w-[40px] h-[40px] rounded-full bg-[rgba(0,0,0,0.3)]"></span>
      </div>
    </div>
  );
}

export default Hero;
