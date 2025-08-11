import { motion } from 'framer-motion'

// Hero assets
const imgHeroSphere = "http://localhost:3845/assets/256c608c492172c86679879aeb543ec2e58eee83.png"
const imgHeroSphereMask = "http://localhost:3845/assets/3d7097266995ad1044f383915d0035b49c212f55.svg"
const imgEllipseGlow = "http://localhost:3845/assets/b45acdf9e2603fbcea02f24aa2350113bbb296de.svg"

export default function HeroSection() {
  return (
    <section className="bg-black relative w-full overflow-hidden">
      {/* Background glow */}
      <div className="hidden lg:block absolute left-[1018px] top-[210px] w-glow h-glow">
        <div className="absolute inset-0 -scale-[4]">
          <img alt="Background glow" className="block max-w-none w-full h-full" src={imgEllipseGlow} />
        </div>
      </div>

      {/* Main hero content */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between pt-8 sm:pt-12 md:pt-[60px] pb-0 px-4 sm:px-6 md:px-8 lg:px-0 relative w-full max-w-[1040px] mx-auto">
        {/* Left Content */}
        <div className="flex flex-col gap-6 sm:gap-8 items-start justify-start p-0 relative w-full lg:w-[515px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-dm-sans font-bold text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-[1.03] text-left tracking-[-0.02em] lg:tracking-[-1.68px] bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent"
          >
            DeFAI Agentic Ecosystem
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-dm-mono text-sm sm:text-base md:text-lg lg:text-[18px] leading-[1.4] text-left tracking-[-0.01em] lg:tracking-[-0.36px] text-white opacity-80"
          >
            We build autonomous AIs on Sui to bring unparalleled on-chain efficiency to builders, institutions, and investors.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-row gap-4 sm:gap-6 lg:gap-8 items-center justify-start lg:justify-end p-0 relative w-full sm:w-auto lg:w-[198px]"
          >
            <div className="w-full sm:w-auto sm:grow h-10 sm:h-11 rounded-xl bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF]">
              <div className="flex flex-col items-center justify-center relative w-full h-full">
                <div className="flex flex-col gap-2.5 h-10 sm:h-11 items-center justify-center px-4 py-2 relative w-full">
                  <div className="flex flex-row items-center justify-start p-0 relative">
                    <p className="font-dm-sans font-semibold text-sm sm:text-base lg:text-[18px] leading-[1.1] text-center text-[#0a080e]">
                      Launch App
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Hero Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-8 lg:mt-0 mx-auto lg:mx-0"
        >
          <div className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-hero-sphere h-[250px] sm:h-[300px] md:h-[350px] lg:h-hero-sphere relative">
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${imgHeroSphere}')`,
                maskImage: `url('${imgHeroSphereMask}')`,
                maskSize: 'contain'
              }}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-[#FF00A6] via-[#FF00C8] via-[#FF00FF] via-[#C400FF] via-[#4A28FF] via-[#002FFF] via-[#0078FF] via-[#00C4FF] to-[#00FFFF] mix-blend-hue"
              style={{
                maskImage: `url('${imgHeroSphereMask}')`,
                maskSize: 'contain',
                maskPosition: 'center'
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

