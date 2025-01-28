import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen font-montserrat font-thin">
      <main className="max-w-5xl mx-auto px-4 py-8 sm:py-12">
        {/* Logo */}
        <div className="text-center mb-20 sm:mb-32">
          <h1 className="text-base sm:text-lg font-thin tracking-[0.5em] text-white/80">
            BOOP
          </h1>
        </div>

        {/* Hero Section */}
        <div className="flex flex-col items-center text-center mb-24 sm:mb-40">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-thin mb-8 sm:mb-12 tracking-wider leading-tight">
            <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">MONITOR YOUR</span><br/>
            <span className="bg-gradient-to-b from-[#003af5] to-[#003af5]/60 bg-clip-text text-transparent">FUTURE</span>
          </h2>
          <p className="text-[10px] sm:text-xs max-w-2xl mb-12 sm:mb-16 font-thin tracking-[0.2em] uppercase">
            Technology that transforms data into performance
          </p>
          <button className="border-[0.5px] border-white/20 hover:border-[#003af5] text-white hover:text-[#003af5] transition-all duration-500 font-extralight py-4 sm:py-6 px-12 sm:px-16 rounded-full tracking-[0.4em] text-xs sm:text-sm">
            START
          </button>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-3 gap-6 sm:gap-20 mb-12 sm:mb-20">
          <div className="text-center group">
            <div className="flex justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            </div>
          </div>

          <div className="text-center group">
            <div className="flex justify-center">
              <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white/40 group-hover:text-white transition-colors duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
          </div>
        </div>

        {/* Graph Section */}
        <div className="relative h-40 sm:h-48 mb-24 sm:mb-40 px-4">
          {/* Graph Lines */}
          <div className="absolute inset-0 flex items-end justify-between">
            <div className="w-[1px] h-[60%] bg-gradient-to-t from-[#003af5] to-white/20"></div>
            <div className="w-[1px] h-[75%] bg-gradient-to-t from-[#003af5] to-white/20"></div>
            <div className="w-[1px] h-[90%] bg-gradient-to-t from-[#003af5] to-white/20"></div>
            <div className="w-[1px] h-[70%] bg-gradient-to-t from-[#003af5] to-white/20"></div>
            <div className="w-[1px] h-[85%] bg-gradient-to-t from-[#003af5] to-white/20"></div>
            <div className="w-[1px] h-[95%] bg-gradient-to-t from-[#003af5] to-white/20"></div>
          </div>
          
          {/* Graph Line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-white/10"></div>
        </div>
      </main>

      <footer className="border-t border-white/5">
        <div className="max-w-5xl mx-auto px-4 py-6 sm:py-8">
          <p className="text-center text-gray-500 font-extralight tracking-[0.3em] text-[10px] sm:text-xs">
            © 2024 BOOP
          </p>
        </div>
      </footer>
    </div>
  );
}
