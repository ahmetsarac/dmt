export default function WishlistButton() {
    return (
      <div className="absolute z-20 w-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:bottom-12 md:bottom-16 lg:bottom-40  xl:top-6/10 xl:left-1/6">
      <div className="relative">
        {/* Hidden SVG for clip path definition */}
        <svg width="0" height="0" className="absolute">
          <defs>
            <clipPath id="vintage-clip" clipPathUnits="objectBoundingBox">
              {/* Vintage tape/banner style clip path */}
              <path d="M0.05,0.2 L0.95,0.2 L0.98,0.3 L0.95,0.8 L0.05,0.8 L0.02,0.7 L0.05,0.2 Z" />
            </clipPath>
          </defs>
        </svg>
        
        <a
          href="https://store.steampowered.com/app/your_game_id"
          target="_blank"
          rel="noopener noreferrer"
          className="
            block relative
            px-6 py-8
            text-3xl
            sm:px-8 sm:py-4 
            md:px-10 md:py-5
            lg:px-12 lg:py-6
            bg-gradient-to-br from-yellow-300 via-yellow-400 to-orange-600
            text-black font-black
            sm:text-xl 
            md:text-2xl 
            lg:text-3xl
            uppercase tracking-wider
            shadow-2xl
            transform hover:scale-105 
            transition-all duration-300 ease-out
            hover:shadow-3xl
            border-2 border-orange-500
          "
          style={{
            clipPath: 'url(#vintage-clip)',
            WebkitClipPath: 'url(#vintage-clip)',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(to bottom right, #fde047, #facc15, #ea580c)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.background = 'linear-gradient(to bottom right, #fde047, #facc15, #ea580c)';
          }}
        >
          {/* Inner glow effect */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            
{/* Steam SVG Icon */}
<svg 
                className="w-10 h-10 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8" 
                fill="currentColor" 
                viewBox="0 0 128 128"
              >
                <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)">
                  <path d="M507 1255 c-181 -36 -349 -170 -433 -342 -31 -65 -73 -218 -62 -228
                  2 -3 78 -35 169 -72 l164 -68 45 14 c25 8 50 15 56 17 6 1 45 51 86 111 55 79
                  76 119 80 150 13 96 89 174 189 195 106 22 215 -34 263 -136 25 -52 24 -139
                  -1 -196 -32 -74 -122 -140 -190 -140 -20 0 -64 -25 -139 -80 -104 -74 -112
                  -82 -118 -119 -12 -76 -92 -141 -171 -141 -68 0 -140 49 -164 111 -8 24 -75
                  57 -228 116 -21 8 16 -82 61 -150 84 -126 240 -234 386 -268 72 -16 210 -16
                  280 0 217 51 400 227 466 446 13 42 18 93 18 170 0 97 -4 120 -30 195 -38 109
                  -88 183 -177 265 -147 137 -345 190 -550 150z"/>
                  <path d="M780 938 c-66 -34 -93 -79 -88 -148 5 -64 26 -99 79 -129 104 -59
                  229 16 229 136 0 120 -116 194 -220 141z m140 -46 c59 -44 58 -136 -3 -188
                  -27 -23 -38 -26 -81 -21 -40 3 -55 11 -78 36 -50 56 -33 151 34 185 39 20 91
                  15 128 -12z"/>
                  <path d="M410 526 c0 -4 20 -15 43 -25 88 -38 114 -116 58 -172 -34 -34 -80
                  -38 -138 -14 -48 20 -50 19 -23 -10 53 -57 144 -54 194 5 69 83 20 205 -88
                  217 -25 3 -46 3 -46 -1z"/>
                </g>
              </svg>
            Out Now
          </span>
          
          {/* Decorative elements */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-50"></div>
        </a>
        
        {/* Drop shadow effect */}
        <div 
          className="
            absolute inset-0 
            bg-black/30 
            transform translate-x-1 translate-y-1 
            sm:translate-x-2 sm:translate-y-2
            -z-10
          "
          style={{
            clipPath: 'url(#vintage-clip)',
            WebkitClipPath: 'url(#vintage-clip)',
          }}
        ></div>
      </div>
    </div>
    );
}