import Header from "./Header"
import HeroSection from "./HeroSection"
import RoadmapSection from "./RoadmapSection"
import FooterSection from "./FooterSection"
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#010101] text-white">
  <Header />
  <HeroSection />
  <RoadmapSection />

      {/* Built for Impact Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            {/* Header */}
            <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-16 mb-8 sm:mb-12 md:mb-16">
              <div className="w-full lg:flex-1">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] font-dm-sans font-bold leading-[1.2] tracking-[-0.03em] lg:tracking-[-1.44px] text-white mb-6 sm:mb-8">
                  Built for Impact
                </h2>
                <button className="border border-white/20 rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/5 transition-colors">
                  Collaborate With Us
                </button>
              </div>
              <div className="w-full lg:flex-1">
                <p className="text-sm sm:text-base lg:text-[16px] font-dm-mono text-white/70 leading-[1.4] tracking-[-0.02em] lg:tracking-[-0.32px]">
                  Our team has hosted 70+ workshops and conferences across 4 countries, boosting Web3 literacy and expansion in Africa and emerging markets.
                </p>
              </div>
            </div>

            {/* Photo Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              {/* Large image on the left */}
              <div className="order-1">
                <div className="w-full h-48 sm:h-64 lg:h-[400px] bg-gradient-to-br from-[#4A90E2] to-[#357ABD] rounded-2xl p-[2px]">
                  <div className="w-full h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                        <svg width="20" height="20" className="sm:w-6 sm:h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs sm:text-sm lg:text-[14px] font-dm-sans text-white/70">
                        Workshop & Conference Photo
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right side - 2x2 grid */}
              <div className="order-2 grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6">
                {/* Top left */}
                <div className="bg-gradient-to-br from-[#FF00FF] to-[#8B00FF] rounded-2xl p-[2px]">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Team Photo
                      </p>
                    </div>
                  </div>
                </div>

                {/* Top right */}
                <div className="bg-gradient-to-br from-[#6BB6FF] to-[#4A90E2] rounded-2xl p-[2px]">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 2L3 7L12 12L21 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 17L12 22L21 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M3 12L12 17L21 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Conference
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom left */}
                <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF4757] rounded-2xl p-[2px]">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M12 6.253V10.5M12 10.5C14.2091 10.5 16 12.2909 16 14.5V16.5C16 18.7091 14.2091 20.5 12 20.5C9.79086 20.5 8 18.7091 8 16.5V14.5C8 12.2909 9.79086 10.5 12 10.5ZM12 10.5V6.253M12 6.253C12.8124 6.09413 13.6462 6.00015 14.5 6.00015C18.6421 6.00015 22 9.35801 22 13.5002V16.5C22 18.7091 20.2091 20.5 18 20.5C15.7909 20.5 14 18.7091 14 16.5V14.5M12 6.253C11.1876 6.09413 10.3538 6.00015 9.5 6.00015C5.35786 6.00015 2 9.35801 2 13.5002V16.5C2 18.7091 3.79086 20.5 6 20.5C8.20914 20.5 10 18.7091 10 16.5V14.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Workshop
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bottom right */}
                <div className="bg-gradient-to-br from-[#2A2A2A] to-[#1A1A1A] rounded-2xl p-[2px] border border-white/10">
                  <div className="w-full h-24 sm:h-32 lg:h-full rounded-2xl bg-[#1A1A1A] flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3">
                        <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M8 2V5M16 2V5M3.5 9.09H20.5M21 8.5V17C21 18.105 20.105 19 19 19H5C3.895 19 3 18.105 3 17V8.5C3 7.395 3.895 6.5 5 6.5H19C20.105 6.5 21 7.395 21 8.5Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                      <p className="text-xs lg:text-[12px] font-dm-sans text-white/70">
                        Event
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CNS Partnership Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <div className="bg-gradient-to-r from-[#0F2027] via-[#0F4C75] to-[#8E44AD] rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 text-center">
              {/* Logo Section */}
              <div className="flex items-center justify-center gap-4 sm:gap-6 md:gap-8 mb-6 sm:mb-8">
                {/* NODO Logo */}
                <div className="flex items-center">
                  <span className="text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-dm-sans font-bold text-white">nodo</span>
                  <span className="text-xs sm:text-sm lg:text-[16px] font-dm-sans font-medium text-white/80 ml-1 -mt-3 sm:-mt-4 lg:-mt-6">™</span>
                </div>
                
                {/* X Symbol */}
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] font-dm-sans font-light text-white/80">
                  ×
                </div>
                
                {/* CNS Logo */}
                <div className="flex items-center">
                  <div className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 bg-white/20 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                    <svg width="16" height="16" className="sm:w-5 sm:h-5 lg:w-5 lg:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <span className="text-xl sm:text-2xl md:text-3xl lg:text-[32px] font-dm-sans font-bold text-white">CNS</span>
                </div>
              </div>

              {/* Headline */}
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-dm-sans font-bold text-white leading-[1.2] tracking-[-0.03em] lg:tracking-[-0.96px] mb-4 sm:mb-6">
                Social Trading Markets Integrates Cardano DID Infrastructure
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-[16px] font-dm-mono text-white/80 leading-[1.5] tracking-[-0.02em] lg:tracking-[-0.32px] mb-6 sm:mb-8 max-w-[600px] mx-auto">
                NODO is officially integrating CNS, a Decentralized Identity (DID) service built on Cardano, to enhance user verification and on-chain identity management across its platform.
              </p>

              {/* CTA Button */}
              <button className="bg-transparent border border-white/30 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/10 transition-colors">
                Explore Opportunities
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-[#010101] relative py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="px-4 sm:px-8 md:px-[200px]">
          <div className="max-w-[1040px] mx-auto">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
              {/* Left Content */}
              <div className="w-full lg:flex-1 text-center lg:text-left">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[56px] font-dm-sans font-bold text-white leading-[1.1] tracking-[-0.03em] lg:tracking-[-1.68px] mb-6 sm:mb-8">
                  <span className="block">Let's Build the Future of</span>
                  <span className="block">Autonomous Decentralised</span>
                  <span className="block">Finance Together</span>
                </h2>
                <button className="border border-white/20 rounded-full px-6 sm:px-8 py-2 sm:py-3 text-sm lg:text-[14px] font-dm-sans font-medium text-white hover:bg-white/5 transition-colors">
                  Get in touch
                </button>
              </div>

              {/* Right Content - Glowing Orb */}
              <div className="w-full lg:flex-1 flex justify-center items-center order-first lg:order-last">
                <div className="relative scale-75 sm:scale-90 lg:scale-100">
                  {/* Outer glow */}
                  <div className="absolute inset-0 w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] rounded-full bg-gradient-to-br from-[#FF00FF] via-[#8B00FF] to-[#00FFFF] opacity-30 blur-[30px] sm:blur-[35px] lg:blur-[40px] animate-pulse"></div>
                  
                  {/* Middle glow */}
                  <div className="absolute inset-3 sm:inset-4 w-[170px] h-[170px] sm:w-[210px] sm:h-[210px] lg:w-[260px] lg:h-[260px] rounded-full bg-gradient-to-br from-[#FF00FF] via-[#8B00FF] to-[#00FFFF] opacity-50 blur-[15px] sm:blur-[18px] lg:blur-[20px]"></div>
                  
                  {/* Inner orb */}
                  <div className="relative w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] lg:w-[220px] lg:h-[220px] rounded-full bg-gradient-to-br from-[#FF00FF] via-[#8B00FF] to-[#00FFFF] p-[2px]">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-[#FF00FF]/20 via-[#8B00FF]/20 to-[#00FFFF]/20 backdrop-blur-sm flex items-center justify-center">
                      {/* Inner reflection */}
                      <div className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] lg:w-[120px] lg:h-[120px] rounded-full bg-gradient-to-br from-white/20 to-transparent blur-[1px]"></div>
                    </div>
                  </div>
                  
                  {/* Additional glow effects */}
                  <div className="absolute top-6 left-6 sm:top-8 sm:left-8 w-[30px] h-[30px] sm:w-[35px] sm:h-[35px] lg:w-[40px] lg:h-[40px] rounded-full bg-white/30 blur-[6px] sm:blur-[7px] lg:blur-[8px]"></div>
                  <div className="absolute bottom-8 right-8 sm:bottom-10 sm:right-10 lg:bottom-12 lg:right-12 w-[15px] h-[15px] sm:w-[18px] sm:h-[18px] lg:w-[20px] lg:h-[20px] rounded-full bg-[#00FFFF]/50 blur-[3px] sm:blur-[3.5px] lg:blur-[4px]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

  <FooterSection />
    </div>
  )
}
