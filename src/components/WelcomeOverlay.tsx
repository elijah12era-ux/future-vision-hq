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
          transition: `opacity 600ms cubic-bezier(.2,.9,.2,1), transform 600ms cubic-bezier(.2,.9,.2,1)`,
          pointerEvents: isVisible ? 'auto' : 'none',
        }}
      >
        {/* This SVG centers the whole logo by using a parent group 'logo' placed at the SVG center.
            Fan is positioned relative to the logo center so the combined logo always centers in viewport. */}
        <svg
          id="logo-svg"
          viewBox="0 0 600 160"
          role="img"
          aria-label="Futuristic International logo"
          preserveAspectRatio="xMidYMid meet"
          style={{ width: 'min(560px, 90vw)', height: 'auto', overflow: 'visible', display: 'block' }}
        >
          {/* Center the text */}
          <g id="logo" transform="translate(300,80)">
            <g id="wording" transform="translate(0,0)" aria-hidden="true">
              <text x="0" y="-6" textAnchor="middle" fontFamily="Montserrat, Poppins, system-ui, sans-serif" fontSize="32" fontWeight="700" fill="#01C1B4" letterSpacing="0.5">
                Futuristic International
              </text>
              <text x="0" y="18" textAnchor="middle" fontFamily="Montserrat, Poppins, system-ui, sans-serif" fontSize="15" fontWeight="400" fill="#01C1B4" letterSpacing="1" opacity="0.92">
                Power Within, Forge Future
              </text>
            </g>
          </g>
        </svg>
      </div>

      <style>{`
        #logo-svg { overflow: visible; }
        
        #logo-svg #wording { 
          transform-box: fill-box; 
          -webkit-transform-box: fill-box;
          transform-origin: center center;
          will-change: transform, opacity;
          animation: text-in 2.5s cubic-bezier(.2,.9,.2,1) 0s forwards,
                     text-out 2.5s cubic-bezier(.2,.9,.2,1) 2.5s forwards;
        }

        @keyframes text-in {
          0%   { transform: scale(0.85); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
        
        @keyframes text-out {
          0%   { transform: scale(1); opacity: 1; }
          100% { transform: scale(0.85); opacity: 0; }
        }

        @media (prefers-reduced-motion: reduce) {
          #logo-svg #wording { 
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
