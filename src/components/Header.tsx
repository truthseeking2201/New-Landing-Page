import { Button } from './ui/button'

const imgNodoLogo = "data:image/svg+xml,%3Csvg width='43' height='14' viewBox='0 0 43 14' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M8.5 0L17 7L8.5 14L0 7L8.5 0Z' fill='%23FF6B35'/%3E%3Cpath d='M25.5 0L34 7L25.5 14L17 7L25.5 0Z' fill='%23FF6B35'/%3E%3C/svg%3E"

export default function Header() {
  return (
      <header className="relative">
        <div className="flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-4 sm:py-6 md:py-8">
          <div className="flex items-center justify-between w-full max-w-6xl xl:max-w-7xl 2xl:max-w-8xl">
            {/* Logo and Navigation */}
            <div className="flex items-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 xl:gap-16">
              {/* NODO Logo */}
              <div className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 h-8 sm:h-10 md:h-12 lg:h-14 xl:h-16 relative">
                <img
                  src={imgNodoLogo}
                  alt="NODO"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full object-contain"
                />
              </div>

              {/* Navigation */}
              <div className="hidden md:flex items-center h-12 lg:h-14 xl:h-16 relative">
                <nav className="flex">
                  <div className="px-0 py-3 w-24 lg:w-28 xl:w-32 flex items-center justify-center relative">
                    <span className="text-white/70 font-dm-sans font-bold text-sm lg:text-base xl:text-lg">Token</span>
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-[#9DEBFF] to-[#00FF5E] bg-clip-text text-transparent">
                      <span className="text-xs lg:text-sm font-mono font-bold leading-normal px-1.5 py-1">COMING SOON</span>
                    </div>
                  </div>
                  <div className="px-0 py-3 w-24 lg:w-28 xl:w-32 flex items-center justify-center">
                    <span className="text-white/70 font-dm-sans font-bold text-sm lg:text-base xl:text-lg">Docs</span>
                  </div>
                  <div className="px-0 py-3 w-24 lg:w-28 xl:w-32 flex items-center justify-center">
                    <span className="text-white/70 font-dm-sans font-bold text-sm lg:text-base xl:text-lg">Contact</span>
                  </div>
                </nav>
              </div>
            </div>

            {/* Launch App Button */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                size="lg"
                className="h-9 sm:h-10 md:h-11 lg:h-12 xl:h-14 rounded-xl border-[#ffe8c9] bg-transparent hover:bg-white/5 px-3 sm:px-4 md:px-6 lg:px-8 xl:px-10"
              >
                <span className="bg-gradient-to-r from-[#FFE8C9] via-[#F9F4E9] via-[#E3F6FF] to-[#C9D4FF] bg-clip-text text-transparent font-dm-sans font-semibold text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl">
                  Launch App
                </span>
              </Button>
            </div>
          </div>
        </div>
      </header>
  )
}
