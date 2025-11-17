import { useEffect, useState } from "react";

const WelcomeOverlay = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReduced) {
      setShouldRender(false);
      return;
    }

    const TOTAL_MS = 5000;
    const FADE_MS = 600;

    const timer = setTimeout(() => {
      setIsVisible(false);

      setTimeout(() => {
        setShouldRender(false);
      }, FADE_MS + 60);
    }, TOTAL_MS);

    return () => clearTimeout(timer);
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <div
        id="welcome-overlay"
        aria-hidden={!isVisible}
        style={{
          position: 'fixed',
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0C274A',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0px) scale(1)' : 'translateY(-8px) scale(0.985)',
          transition: 'opacity 600ms cubic-bezier(.2,.9,.2,1), transform 600ms cubic-bezier(.2,.9,.2,1)',
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        <svg
          id="logo-svg"
          viewBox="0 0 600 160"
          role="img"
          aria-label="Futuristic International logo"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: 'min(560px, 90vw)', height: 'auto', overflow: 'visible', display: 'block' }}
        >
          {/* Position all logo elements relative to center (300,80) for proper centering */}
          <g id="logo" transform="translate(300,80)">
            {/* Fan positioned left of center (-120,0) */}
            <g id="fan" transform="translate(-120,0)">
              <path d="M 0,-45 C 15,-45 28,-38 35,-25 C 42,-12 42,2 38,12 L 8,8 C 10,2 10,-8 5,-18 C 3,-22 1,-28 0,-35 Z" fill="#01C1B4"/>
              <path d="M 45,0 C 45,15 38,28 25,35 C 12,42 -2,42 -12,38 L -8,8 C -2,10 8,10 18,5 C 22,3 28,1 35,0 Z" fill="#01C1B4" opacity="0.95"/>
              <path d="M 0,45 C -15,45 -28,38 -35,25 C -42,12 -42,-2 -38,-12 L -8,-8 C -10,-2 -10,8 -5,18 C -3,22 -1,28 0,35 Z" fill="#01C1B4" opacity="0.96"/>
              <path d="M -45,0 C -45,-15 -38,-28 -25,-35 C -12,-42 2,-42 12,-38 L 8,-8 C 2,-10 -8,-10 -18,-5 C -22,-3 -28,-1 -35,0 Z" fill="#01C1B4" opacity="0.97"/>
              <circle cx="0" cy="0" r="11" fill="#01C1B4"/>
            </g>

            {/* Wording placed to the right of the fan */}
            <g id="wording" transform="translate(40,0)">
              <text x="0" y="-6" fontFamily="Montserrat, Poppins, system-ui, sans-serif" fontSize="32" fontWeight="700" fill="#01C1B4" letterSpacing="0.5">
                Futuristic International
              </text>
              <text x="0" y="18" fontFamily="Montserrat, Poppins, system-ui, sans-serif" fontSize="15" fontWeight="400" fill="#01C1B4" letterSpacing="1" opacity="0.92">
                Power Within, Forge Future
              </text>
            </g>
          </g>
        </svg>
      </div>

      <style>{`
        #logo-svg { overflow: visible; }
        
        #logo-svg #fan, #logo-svg #wording { 
          transform-box: fill-box; 
          -webkit-transform-box: fill-box; 
        }

        /* Fan center is at its local (0,0) */
        #logo-svg #fan { 
          transform-origin: 0px 0px; 
          will-change: transform;
          animation: fan-cw 2.5s cubic-bezier(.2,.9,.2,1) 0s forwards,
                     fan-ccw 2.5s cubic-bezier(.2,.9,.2,1) 2.5s forwards;
        }

        #logo-svg #wording {
          will-change: transform, opacity;
          transform-origin: 0px 0px;
          animation: wording-out 2.5s cubic-bezier(.2,.9,.2,1) 0s forwards,
                     wording-in 2.5s cubic-bezier(.2,.9,.2,1) 2.5s forwards;
        }

        @keyframes fan-cw { 
          from { transform: rotate(0deg); } 
          to { transform: rotate(360deg); } 
        }
        
        @keyframes fan-ccw { 
          from { transform: rotate(360deg); } 
          to { transform: rotate(0deg); } 
        }
        
        @keyframes wording-out {
          0%   { transform: translate(-120px, 0) scale(0.22); opacity: 0; }
          55%  { transform: translate(-12px, 0) scale(0.95); opacity: 1; }
          100% { transform: translate(0px, 0) scale(1); opacity: 1; }
        }
        
        @keyframes wording-in {
          0%   { transform: translate(0px, 0) scale(1); opacity: 1; }
          45%  { transform: translate(-12px, 0) scale(0.95); opacity: 1; }
          100% { transform: translate(-120px, 0) scale(0.22); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          #logo-svg #fan, #logo-svg #wording { 
            animation: none !important; 
            transform: none !important; 
            opacity: 1 !important; 
          }
        }
      `}</style>
    </>
  );
};

export default WelcomeOverlay;
