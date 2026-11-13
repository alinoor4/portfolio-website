import type { CSSProperties } from "react";

export function HeroVistaIllustration() {
  return (
    <svg
      viewBox="0 0 1440 820"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full select-none"
    >
      <defs>
        <linearGradient id="davinci-hero-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3c241b" />
          <stop offset="30%" stopColor="#8b4a2f" />
          <stop offset="62%" stopColor="#d98a4e" />
          <stop offset="100%" stopColor="#f6d28b" />
        </linearGradient>

        <radialGradient id="davinci-hero-sun" cx="50%" cy="56%" r="48%">
          <stop offset="0%" stopColor="#fff4d2" stopOpacity="0.92" />
          <stop offset="42%" stopColor="#f0b668" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#8b4a2f" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="davinci-hero-beam" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#f6d28b" stopOpacity="0" />
          <stop offset="45%" stopColor="#f6d28b" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#f6d28b" stopOpacity="0.02" />
        </linearGradient>

        <linearGradient id="davinci-hero-hill-far" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#8c5438" />
          <stop offset="100%" stopColor="#46291d" />
        </linearGradient>

        <linearGradient id="davinci-hero-hill-near" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#5b3725" />
          <stop offset="100%" stopColor="#26170f" />
        </linearGradient>

        <linearGradient id="davinci-hero-arcade-left" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1b120c" />
          <stop offset="100%" stopColor="#3c271a" />
        </linearGradient>

        <linearGradient id="davinci-hero-arcade-right" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#3c271a" />
          <stop offset="100%" stopColor="#1b120c" />
        </linearGradient>

        <linearGradient id="davinci-hero-cupola" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e09a64" />
          <stop offset="100%" stopColor="#6c3927" />
        </linearGradient>

        <linearGradient id="davinci-hero-river" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8c97a" />
          <stop offset="28%" stopColor="#89b4e3" />
          <stop offset="72%" stopColor="#5c92c8" />
          <stop offset="100%" stopColor="#d4af37" />
        </linearGradient>

        <linearGradient id="davinci-hero-cliff" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#291b12" />
          <stop offset="100%" stopColor="#16100b" />
        </linearGradient>
      </defs>

      {/* Tuscan golden-hour sky */}
      <rect width="1440" height="820" fill="url(#davinci-hero-sky)" />
      <rect width="1440" height="620" fill="url(#davinci-hero-sun)" />

      {/* Subtle golden sunbeams */}
      <g className="beam-shimmer">
        <rect x="440" y="40" width="24" height="440" fill="url(#davinci-hero-beam)" />
        <rect x="702" y="20" width="36" height="470" fill="url(#davinci-hero-beam)" />
        <rect x="976" y="65" width="24" height="425" fill="url(#davinci-hero-beam)" />
      </g>

      {/* Golden Vitruvian compass arcs & celestial astrolabe geometry in the sky */}
      <g transform="translate(720, 275)" fill="none" stroke="#f6d28b">
        <circle r="248" strokeWidth="1" strokeDasharray="6 8" opacity="0.3" className="compass-spin" />
        <circle r="212" strokeWidth="1.2" opacity="0.22" />
        <rect x="-175" y="-175" width="350" height="350" strokeWidth="0.9" opacity="0.16" />
        <path d="M-290,0 L290,0 M0,-260 L0,260" strokeWidth="0.8" strokeDasharray="4 6" opacity="0.2" />
        <path d="M-190,-120 A225,225 0 0 1 190,-120" strokeWidth="1.4" opacity="0.28" className="circuit-flow" />
      </g>

      {/* Leonardo's Aerial Screw (helical rotor) etched subtly in the upper-right Tuscan sky */}
      <g transform="translate(1065, 165) rotate(-8)" fill="none" stroke="#f6d28b" opacity="0.34">
        <line x1="0" y1="-78" x2="0" y2="78" strokeWidth="2.2" />
        <ellipse cx="0" cy="48" rx="64" ry="15" strokeWidth="1.2" />
        <path
          d="M-58,42 C-58,15 58,20 58,-5 C58,-28 -44,-22 -44,-44 C-44,-62 28,-58 28,-70"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M-58,42 L0,26 L58,-5 L0,-18 L-44,-44 L0,-52 L28,-70"
          strokeWidth="0.9"
          strokeDasharray="3 4"
        />
        <circle cx="0" cy="-78" r="4" fill="#f6d28b" />
      </g>

      {/* Leonardo's Proportional Compass etched softly in the upper-left sky */}
      <g transform="translate(365, 175) rotate(12)" fill="none" stroke="#f6d28b" opacity="0.3">
        <circle cx="0" cy="-54" r="8" strokeWidth="1.6" />
        <line x1="0" y1="-46" x2="-46" y2="62" strokeWidth="2" strokeLinecap="round" />
        <line x1="0" y1="-46" x2="46" y2="62" strokeWidth="2" strokeLinecap="round" />
        <path d="M-36,16 A46,46 0 0 0 36,16" strokeWidth="1.3" strokeDasharray="4 4" />
      </g>

      {/* Drifting Tuscan clouds */}
      <g fill="#f7cfa0" opacity="0.42">
        <g className="cloud-drift" style={{ "--drift-delay": "0s" } as CSSProperties}>
          <ellipse cx="310" cy="395" rx="210" ry="38" />
          <ellipse cx="475" cy="410" rx="145" ry="28" />
        </g>
        <g className="cloud-drift" style={{ "--drift-delay": "-7s" } as CSSProperties}>
          <ellipse cx="1010" cy="402" rx="225" ry="40" />
          <ellipse cx="1185" cy="388" rx="160" ry="30" />
        </g>
      </g>

      {/* Distant Tuscan rolling hills */}
      <path d="M0,490 Q240,360 520,455 T960,445 T1440,480 L1440,565 L0,565 Z" fill="url(#davinci-hero-hill-far)" />
      <path d="M0,535 Q290,425 570,505 T1110,485 T1440,520 L1440,610 L0,610 Z" fill="url(#davinci-hero-hill-near)" />

      {/* Grand Florentine Cupola (Brunelleschi Dome) & Campanile on the central horizon */}
      <g transform="translate(720, 462)">
        {/* Drum & octagonal dome */}
        <rect x="-78" y="-26" width="156" height="44" fill="#5e3222" />
        <path d="M-76,-26 C-70,-105 -30,-138 0,-148 C30,-138 70,-105 76,-26 Z" fill="url(#davinci-hero-cupola)" />
        {/* Ribs on cupola */}
        <path
          d="M-50,-26 C-44,-92 -18,-128 0,-148 M-20,-26 C-16,-90 -6,-126 0,-148 M20,-26 C16,-90 6,-126 0,-148 M50,-26 C44,-92 18,-128 0,-148"
          fill="none"
          stroke="#f6d28b"
          strokeWidth="1.2"
          opacity="0.55"
        />
        {/* Lantern & golden sphere */}
        <rect x="-12" y="-176" width="24" height="28" fill="#d98a4e" />
        <polygon points="-15,-176 0,-196 15,-176" fill="#f6d28b" />
        <circle cx="0" cy="-201" r="4" fill="#fff4d2" />
        {/* Drum oculi */}
        {[-48, -16, 16, 48].map((ox) => (
          <circle key={ox} cx={ox} cy="-6" r="6" fill="#f6d28b" opacity="0.55" />
        ))}
        {/* Flanking campanile tower */}
        <rect x="-124" y="-110" width="28" height="128" fill="#462519" />
        <polygon points="-127,-110 -110,-134 -93,-110" fill="#8b4a2f" />
        <rect x="-116" y="-92" width="12" height="22" rx="6" fill="#f6d28b" opacity="0.55" />
      </g>

      {/* Left perspective Renaissance arcade & colonnade (School of Athens perspective) */}
      <g>
        <polygon points="0,120 150,192 150,655 0,685" fill="#1a110b" />
        <polygon points="150,192 275,252 275,638 150,655" fill="url(#davinci-hero-arcade-left)" />
        <polygon points="275,252 385,305 385,622 275,638" fill="#2c1c12" />
        <polygon points="385,305 478,350 478,608 385,622" fill="#3a2518" />
        <polygon points="478,350 555,388 555,595 478,608" fill="#4a3020" />

        {/* Cornices */}
        <line x1="0" y1="120" x2="555" y2="388" stroke="#d4af37" strokeWidth="2" opacity="0.45" />
        <line x1="0" y1="365" x2="555" y2="480" stroke="#d4af37" strokeWidth="1.2" opacity="0.3" />

        {/* Semicircular Roman arches glowing softly with warm candlelight */}
        {[
          { x: 35, y: 205, w: 80, h: 135 },
          { x: 175, y: 262, w: 72, h: 112 },
          { x: 298, y: 318, w: 62, h: 92 },
          { x: 405, y: 365, w: 50, h: 74 },
          { x: 492, y: 404, w: 42, h: 60 },
        ].map((arch, idx) => (
          <g key={idx}>
            <path
              d={`M${arch.x},${arch.y + arch.h} L${arch.x},${arch.y + arch.w / 2} A${arch.w / 2},${arch.w / 2} 0 0 1 ${arch.x + arch.w},${arch.y + arch.w / 2} L${arch.x + arch.w},${arch.y + arch.h} Z`}
              fill="#e8c97a"
              opacity={0.22 - idx * 0.02}
              stroke="#d4af37"
              strokeWidth="1.2"
              strokeOpacity="0.45"
            />
          </g>
        ))}

        {/* Lower loggia arches */}
        {[
          { x: 35, y: 425, w: 80, h: 170 },
          { x: 175, y: 448, w: 72, h: 142 },
          { x: 298, y: 468, w: 62, h: 118 },
          { x: 405, y: 486, w: 50, h: 96 },
        ].map((arch, idx) => (
          <path
            key={idx}
            d={`M${arch.x},${arch.y + arch.h} L${arch.x},${arch.y + arch.w / 2} A${arch.w / 2},${arch.w / 2} 0 0 1 ${arch.x + arch.w},${arch.y + arch.w / 2} L${arch.x + arch.w},${arch.y + arch.h} Z`}
            fill="#120c08"
            stroke="#8b6843"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        ))}
      </g>

      {/* Right perspective Renaissance arcade & colonnade */}
      <g>
        <polygon points="1440,120 1290,192 1290,655 1440,685" fill="#1a110b" />
        <polygon points="1290,192 1165,252 1165,638 1290,655" fill="url(#davinci-hero-arcade-right)" />
        <polygon points="1165,252 1055,305 1055,622 1165,638" fill="#2c1c12" />
        <polygon points="1055,305 962,350 962,608 1055,622" fill="#3a2518" />
        <polygon points="962,350 885,388 885,595 962,608" fill="#4a3020" />

        <line x1="1440" y1="120" x2="885" y2="388" stroke="#d4af37" strokeWidth="2" opacity="0.45" />
        <line x1="1440" y1="365" x2="885" y2="480" stroke="#d4af37" strokeWidth="1.2" opacity="0.3" />

        {[
          { x: 1325, y: 205, w: 80, h: 135 },
          { x: 1193, y: 262, w: 72, h: 112 },
          { x: 1080, y: 318, w: 62, h: 92 },
          { x: 985, y: 365, w: 50, h: 74 },
          { x: 906, y: 404, w: 42, h: 60 },
        ].map((arch, idx) => (
          <path
            key={idx}
            d={`M${arch.x},${arch.y + arch.h} L${arch.x},${arch.y + arch.w / 2} A${arch.w / 2},${arch.w / 2} 0 0 1 ${arch.x + arch.w},${arch.y + arch.w / 2} L${arch.x + arch.w},${arch.y + arch.h} Z`}
            fill="#e8c97a"
            opacity={0.22 - idx * 0.02}
            stroke="#d4af37"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        ))}

        {[
          { x: 1325, y: 425, w: 80, h: 170 },
          { x: 1193, y: 448, w: 72, h: 142 },
          { x: 1080, y: 468, w: 62, h: 118 },
          { x: 985, y: 486, w: 50, h: 96 },
        ].map((arch, idx) => (
          <path
            key={idx}
            d={`M${arch.x},${arch.y + arch.h} L${arch.x},${arch.y + arch.w / 2} A${arch.w / 2},${arch.w / 2} 0 0 1 ${arch.x + arch.w},${arch.y + arch.w / 2} L${arch.x + arch.w},${arch.y + arch.h} Z`}
            fill="#120c08"
            stroke="#8b6843"
            strokeWidth="1.2"
            strokeOpacity="0.45"
          />
        ))}
      </g>

      {/* Foreground Florentine stone terrace & cliff edge */}
      <polygon points="0,635 615,585 825,585 1440,635 1440,820 0,820" fill="url(#davinci-hero-cliff)" />
      {/* Stone aqueduct piers flanking the central plunge */}
      <path d="M585,595 L635,595 L635,820 L545,820 Z" fill="#23170f" stroke="#5c432d" strokeWidth="1.5" />
      <path d="M805,595 L855,595 L895,820 L805,820 Z" fill="#23170f" stroke="#5c432d" strokeWidth="1.5" />

      {/* Central Renaissance stone aqueduct river flowing over the terrace edge */}
      <polygon points="695,522 745,522 802,608 638,608" fill="url(#davinci-hero-river)" opacity="0.92" />
      <rect x="652" y="608" width="136" height="212" fill="url(#davinci-hero-river)" />
      <rect x="676" y="616" width="24" height="204" fill="#f6d28b" opacity="0.32" />
      <rect x="734" y="616" width="18" height="204" fill="#ffffff" opacity="0.28" />
      {/* Aqueduct crest mist */}
      <ellipse cx="720" cy="610" rx="76" ry="12" fill="#f6d28b" opacity="0.72" />
    </svg>
  );
}

export function WaterfallColumn({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 160 640"
      preserveAspectRatio="none"
      aria-hidden="true"
      className={`pointer-events-none select-none ${className}`}
    >
      <defs>
        <linearGradient id="davinci-waterfall-body" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#16100b" stopOpacity="0" />
          <stop offset="18%" stopColor="#5c92c8" stopOpacity="0.65" />
          <stop offset="48%" stopColor="#89b4e3" stopOpacity="0.88" />
          <stop offset="66%" stopColor="#e8c97a" stopOpacity="0.78" />
          <stop offset="86%" stopColor="#5c92c8" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#16100b" stopOpacity="0" />
        </linearGradient>

        <clipPath id="davinci-waterfall-clip">
          <rect x="20" y="0" width="120" height="640" />
        </clipPath>
      </defs>

      {/* Stone aqueduct borders */}
      <line x1="20" y1="0" x2="20" y2="640" stroke="#8b6843" strokeWidth="2" strokeOpacity="0.45" />
      <line x1="140" y1="0" x2="140" y2="640" stroke="#8b6843" strokeWidth="2" strokeOpacity="0.45" />

      {/* Main lapis-and-gold aqueduct stream */}
      <rect x="24" y="0" width="112" height="640" fill="url(#davinci-waterfall-body)" />

      {/* Animated falling water & golden-lapis streaks */}
      <g clipPath="url(#davinci-waterfall-clip)">
        <g className="waterfall-stream" fill="#f6d28b" opacity="0.42">
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`translate(0, ${i * 74})`}>
              <rect x="40" y="6" width="6" height="44" rx="3" fill="#89b4e3" />
              <rect x="64" y="20" width="8" height="48" rx="4" fill="#f4ead5" />
              <rect x="90" y="8" width="6" height="40" rx="3" fill="#e8c97a" />
              <rect x="112" y="24" width="5" height="36" rx="2.5" fill="#89b4e3" />
            </g>
          ))}
        </g>
      </g>
    </svg>
  );
}

export function GlassLabIllustration() {
  return (
    <svg
      viewBox="0 0 640 700"
      aria-hidden="true"
      className="h-auto w-full select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
    >
      <defs>
        <linearGradient id="davinci-observatory-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1e3552" stopOpacity="0.92" />
          <stop offset="48%" stopColor="#261b14" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#18110c" stopOpacity="0.98" />
        </linearGradient>

        <radialGradient id="davinci-observatory-lapis" cx="50%" cy="22%" r="48%">
          <stop offset="0%" stopColor="#89b4e3" stopOpacity="0.55" />
          <stop offset="55%" stopColor="#5c92c8" stopOpacity="0.22" />
          <stop offset="100%" stopColor="#18110c" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="davinci-observatory-amber" cx="50%" cy="75%" r="46%">
          <stop offset="0%" stopColor="#f6d28b" stopOpacity="0.45" />
          <stop offset="60%" stopColor="#d96b43" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#18110c" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="davinci-observatory-walnut" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2a1c13" />
          <stop offset="50%" stopColor="#4c3322" />
          <stop offset="100%" stopColor="#24170f" />
        </linearGradient>

        <linearGradient id="davinci-observatory-facet-a" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6d28b" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#d4af37" stopOpacity="0.35" />
        </linearGradient>

        <linearGradient id="davinci-observatory-facet-b" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#89b4e3" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#355d8c" stopOpacity="0.42" />
        </linearGradient>
      </defs>

      {/* Outer arched observatory pavilion frame */}
      <path
        d="M58,660 L58,215 A262,200 0 0 1 582,215 L582,660 Z"
        fill="url(#davinci-observatory-bg)"
        stroke="#d4af37"
        strokeWidth="3"
        strokeOpacity="0.65"
      />
      <path
        d="M72,648 L72,222 A248,186 0 0 1 568,222 L568,648 Z"
        fill="none"
        stroke="#8b6843"
        strokeWidth="1.5"
        strokeOpacity="0.55"
      />

      {/* Lapis celestial dome glow & lower candlelight amber glow */}
      <path d="M74,340 L74,222 A246,184 0 0 1 566,222 L566,340 Z" fill="url(#davinci-observatory-lapis)" />
      <rect x="74" y="340" width="492" height="308" fill="url(#davinci-observatory-amber)" />

      {/* TIER 1: CELESTIAL DOME — ARMILLARY SPHERE & VITRUVIAN GEOMETRY */}
      <g transform="translate(320, 178)">
        {/* Dome ribs */}
        <path d="M-220,44 A220,145 0 0 1 220,44" fill="none" stroke="#89b4e3" strokeWidth="1" strokeOpacity="0.35" />
        <ellipse cx="0" cy="44" rx="220" ry="26" fill="none" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.35" />

        {/* Vitruvian proportion square & circle */}
        <rect x="-78" y="-78" width="156" height="156" fill="none" stroke="#e8c97a" strokeWidth="1" strokeOpacity="0.28" />
        <circle r="94" fill="none" stroke="#89b4e3" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.48" className="compass-spin" />

        {/* Brass Armillary Sphere */}
        <g stroke="#e8c97a" fill="none">
          <circle r="66" strokeWidth="2.5" />
          <ellipse rx="66" ry="22" strokeWidth="1.8" transform="rotate(-24)" />
          <ellipse rx="66" ry="22" strokeWidth="1.8" transform="rotate(28)" />
          <ellipse rx="24" ry="66" strokeWidth="1.4" stroke="#89b4e3" />
          <line x1="-82" y1="34" x2="82" y2="-34" strokeWidth="2" stroke="#d4af37" />
          <circle r="10" fill="#89b4e3" stroke="#f6d28b" strokeWidth="1.5" />
        </g>

        {/* Constellation stars */}
        {[
          [-165, -24],
          [-132, -62],
          [140, -56],
          [175, -18],
        ].map(([sx, sy], idx) => (
          <circle key={idx} cx={sx} cy={sy} r="2.5" fill="#f6d28b" opacity="0.85" />
        ))}
      </g>

      {/* Tier 1 -> Tier 2 Florentine walnut gallery beam */}
      <rect x="64" y="294" width="512" height="16" fill="url(#davinci-observatory-walnut)" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.4" />

      {/* TIER 2: DE DIVINA PROPORTIONE — PACIOLI RHOMBICUBOCTAHEDRON & BALANCE SCALES */}
      {/* Flanking brass balance scales (weight decay vs memorization equilibrium) */}
      <g transform="translate(152, 392)" stroke="#d4af37" fill="none">
        <line x1="0" y1="-56" x2="0" y2="54" strokeWidth="2.2" />
        <line x1="-22" y1="54" x2="22" y2="54" strokeWidth="3" />
        <line x1="-42" y1="-34" x2="42" y2="-46" strokeWidth="2" />
        <path d="M-42,-34 L-54,4 L-30,4 Z" strokeWidth="1.2" opacity="0.8" />
        <path d="M-56,4 Q-42,14 -28,4 Z" fill="#89b4e3" fillOpacity="0.55" />
        <path d="M42,-46 L30,-8 L54,-8 Z" strokeWidth="1.2" opacity="0.8" />
        <path d="M28,-8 Q42,2 56,-8 Z" fill="#d96b43" fillOpacity="0.6" />
      </g>

      {/* Suspended Luca Pacioli Rhombicuboctahedron (De Divina Proportione) */}
      <g transform="translate(320, 392)">
        <g className="orb-float" style={{ "--float-delay": "0s" } as CSSProperties}>
          {/* Suspension chain */}
          <line x1="0" y1="-84" x2="0" y2="-52" stroke="#d4af37" strokeWidth="1.4" strokeDasharray="3 3" />
          {/* Polyhedron outer octagon */}
          <polygon
            points="-22,-52 22,-52 52,-22 52,22 22,52 -22,52 -52,22 -52,-22"
            fill="url(#davinci-observatory-facet-b)"
            stroke="#f6d28b"
            strokeWidth="2"
          />
          {/* Inner central square & diagonal bevel facets */}
          <rect
            x="-22"
            y="-22"
            width="44"
            height="44"
            fill="url(#davinci-observatory-facet-a)"
            stroke="#fff4d2"
            strokeWidth="1.4"
          />
          <g stroke="#f6d28b" strokeWidth="1.2" opacity="0.85">
            <line x1="-22" y1="-22" x2="-22" y2="-52" />
            <line x1="22" y1="-22" x2="22" y2="-52" />
            <line x1="22" y1="-22" x2="52" y2="-22" />
            <line x1="22" y1="22" x2="52" y2="22" />
            <line x1="22" y1="22" x2="22" y2="52" />
            <line x1="-22" y1="22" x2="-22" y2="52" />
            <line x1="-22" y1="22" x2="-52" y2="22" />
            <line x1="-22" y1="-22" x2="-52" y2="-22" />
          </g>
        </g>
      </g>

      {/* Tier 2 Scholar Silhouette inspecting the polyhedron */}
      <g transform="translate(474, 464)" fill="#130d09" stroke="#d4af37" strokeOpacity="0.35" strokeWidth="1">
        <circle cx="0" cy="-78" r="13" />
        <path d="M-20,-62 C-10,-65 10,-65 20,-62 L28,0 L-26,0 Z" />
        <path d="M-12,-50 L-48,-72" stroke="#130d09" strokeWidth="7" strokeLinecap="round" />
        <line x1="-56" y1="-82" x2="-38" y2="-66" stroke="#e8c97a" strokeWidth="1.6" />
      </g>

      {/* Tier 2 -> Tier 3 Florentine walnut gallery beam */}
      <rect x="64" y="466" width="512" height="16" fill="url(#davinci-observatory-walnut)" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.4" />

      {/* TIER 3: CANDLELIT SCRIPTORIUM & CODEX WORKBENCH */}
      {/* Open Illuminated Codex */}
      <g transform="translate(215, 578)">
        <rect x="-105" y="18" width="210" height="14" rx="2" fill="#3a2417" stroke="#8b6843" strokeWidth="1" />
        {/* Open parchment pages */}
        <path d="M-74,18 L-68,-12 Q-35,-20 0,-10 Q35,-20 68,-12 L74,18 Z" fill="#f4ead5" stroke="#c8b89b" strokeWidth="1.2" />
        <line x1="0" y1="-10" x2="0" y2="18" stroke="#8b6843" strokeWidth="1.4" />
        {/* Codex diagrams on open pages */}
        <circle cx="-34" cy="2" r="9" fill="none" stroke="#5c92c8" strokeWidth="1.3" />
        <path d="M18,-2 L52,-2 M18,5 L46,5 M18,12 L50,12" stroke="#d96b43" strokeWidth="1.4" strokeLinecap="round" />
        {/* Candle & flame */}
        <rect x="82" y="-12" width="10" height="30" rx="2" fill="#f4ead5" />
        <ellipse cx="87" cy="-20" rx="5" ry="9" fill="#f6d28b" className="jet-pulse" />
      </g>

      {/* Scriptorium Scholar Silhouette */}
      <g transform="translate(432, 648)" fill="#120c08" stroke="#e8c97a" strokeOpacity="0.3" strokeWidth="1">
        <circle cx="-8" cy="-102" r="14" />
        <path d="M-28,-85 C-12,-90 12,-90 26,-82 L34,0 L-32,0 Z" />
        {/* Drafting table */}
        <polygon points="-96,-54 46,-54 60,0 -106,0" fill="#2b1b12" stroke="#8b6843" strokeWidth="1.4" />
        {/* Candle glow on desk */}
        <circle cx="-78" cy="-76" r="18" fill="#f6d28b" fillOpacity="0.18" stroke="none" />
        <rect x="-82" y="-72" width="8" height="18" fill="#f4ead5" stroke="none" />
        <ellipse cx="-78" cy="-78" rx="4" ry="7" fill="#f6d28b" stroke="none" className="jet-pulse" />
      </g>

      {/* Fluted classical framing columns */}
      {[72, 550].map((cx) => (
        <g key={cx}>
          <rect x={cx - 10} y="218" width="20" height="430" fill="#2c1d13" stroke="#8b6843" strokeWidth="1" />
          <rect x={cx - 15} y="212" width="30" height="10" rx="2" fill="#d4af37" fillOpacity="0.65" />
          <rect x={cx - 15} y="644" width="30" height="12" rx="2" fill="#d4af37" fillOpacity="0.65" />
        </g>
      ))}
    </svg>
  );
}

export function TurbineEngineIllustration() {
  return (
    <svg
      viewBox="0 0 660 560"
      aria-hidden="true"
      className="h-auto w-full select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
    >
      <defs>
        <radialGradient id="davinci-clockwork-sanguine" cx="56%" cy="46%" r="48%">
          <stop offset="0%" stopColor="#d96b43" stopOpacity="0.38" />
          <stop offset="48%" stopColor="#d4af37" stopOpacity="0.2" />
          <stop offset="100%" stopColor="#16100b" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="davinci-clockwork-brass" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6d28b" />
          <stop offset="50%" stopColor="#c79535" />
          <stop offset="100%" stopColor="#6b4b1e" />
        </linearGradient>

        <linearGradient id="davinci-clockwork-walnut" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#4c3322" />
          <stop offset="100%" stopColor="#1c120c" />
        </linearGradient>

        <linearGradient id="davinci-clockwork-stream" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#89b4e3" stopOpacity="0.9" />
          <stop offset="55%" stopColor="#5c92c8" stopOpacity="0.72" />
          <stop offset="100%" stopColor="#e8c97a" stopOpacity="0.35" />
        </linearGradient>
      </defs>

      {/* Clockwork chamber backdrop */}
      <rect
        x="16"
        y="16"
        width="628"
        height="528"
        rx="20"
        fill="#1a120d"
        stroke="#8b6843"
        strokeWidth="2"
        strokeOpacity="0.45"
      />
      <rect x="28" y="28" width="604" height="504" rx="14" fill="url(#davinci-clockwork-sanguine)" />

      {/* Subtle Codex drafting grid */}
      <g stroke="#d4af37" strokeOpacity="0.09" strokeWidth="1">
        {[120, 220, 320, 420, 520].map((gx) => (
          <line key={gx} x1={gx} y1="36" x2={gx} y2="496" />
        ))}
        {[120, 220, 320, 420].map((gy) => (
          <line key={gy} x1="36" y1={gy} x2="624" y2={gy} />
        ))}
      </g>

      {/* Aqueduct stream driving the left waterwheel */}
      <path d="M116,18 L156,18 L156,282 Q156,336 112,356 L92,334 Q118,314 116,272 Z" fill="url(#davinci-clockwork-stream)" />

      {/* Timber & stone support frame */}
      <rect x="76" y="424" width="508" height="24" rx="4" fill="url(#davinci-clockwork-walnut)" stroke="#8b6843" strokeWidth="1.2" />
      <rect x="132" y="242" width="18" height="184" fill="#2c1d13" stroke="#8b6843" strokeWidth="1" />
      <rect x="352" y="218" width="22" height="208" fill="#2c1d13" stroke="#8b6843" strokeWidth="1" />
      <rect x="524" y="268" width="18" height="158" fill="#2c1d13" stroke="#8b6843" strokeWidth="1" />

      {/* Primary Waterwheel / Overshot Cog (left) */}
      <g transform="translate(141, 294)">
        <g className="turbine-spin">
          <circle r="72" fill="none" stroke="url(#davinci-clockwork-brass)" strokeWidth="10" />
          <circle r="52" fill="none" stroke="#8b6843" strokeWidth="2.5" />
          {Array.from({ length: 12 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 30})`}>
              <line x1="0" y1="-52" x2="0" y2="52" stroke="#8b6843" strokeWidth="3" />
              <rect x="-7" y="-82" width="14" height="14" rx="2" fill="#d4af37" />
            </g>
          ))}
        </g>
        <circle r="14" fill="#d96b43" stroke="#f6d28b" strokeWidth="2.5" />
      </g>

      {/* Main Planetary Gearwheel (center) */}
      <g transform="translate(363, 236)">
        {/* Outer planetary ring */}
        <circle r="138" fill="none" stroke="#d96b43" strokeWidth="1.5" strokeDasharray="6 6" strokeOpacity="0.65" />
        <g className="turbine-spin">
          <circle r="114" fill="none" stroke="url(#davinci-clockwork-brass)" strokeWidth="14" />
          <circle r="76" fill="none" stroke="#d4af37" strokeWidth="3" strokeOpacity="0.7" />
          {Array.from({ length: 16 }).map((_, i) => (
            <g key={i} transform={`rotate(${i * 22.5})`}>
              <rect x="-8" y="-128" width="16" height="16" rx="2" fill="#e8c97a" />
              {i % 2 === 0 && <line x1="0" y1="0" x2="0" y2="-110" stroke="#8b6843" strokeWidth="4" />}
            </g>
          ))}
          {/* Planetary pinions */}
          {[0, 120, 240].map((deg) => (
            <g key={deg} transform={`rotate(${deg}) translate(0, -56)`}>
              <circle r="20" fill="#2a1c13" stroke="#e8c97a" strokeWidth="3" />
              <circle r="6" fill="#d96b43" />
            </g>
          ))}
        </g>
        {/* Central sanguine core */}
        <circle r="24" fill="#22160f" stroke="#f6d28b" strokeWidth="3" />
        <circle r="11" fill="#d96b43" className="jet-pulse" />
      </g>

      {/* Secondary Escapement Gear & Anchor Pawl (right) */}
      <g transform="translate(533, 294)">
        <g className="compass-spin">
          <circle r="54" fill="none" stroke="#d96b43" strokeWidth="6" />
          {Array.from({ length: 10 }).map((_, i) => (
            <polygon
              key={i}
              points="-4,-64 6,-52 -6,-52"
              fill="#e8c97a"
              transform={`rotate(${i * 36})`}
            />
          ))}
        </g>
        <circle r="12" fill="#e8c97a" />
      </g>

      {/* Deterministic escapement anchor bar linking center and right gears */}
      <path d="M446,162 Q502,158 533,228" fill="none" stroke="#f6d28b" strokeWidth="3" strokeLinecap="round" />
      <circle cx="446" cy="162" r="6" fill="#d96b43" />

      {/* Two Scholar-Engineers at Codex Lecterns in Foreground */}
      {/* Left Scholar-Engineer */}
      <g transform="translate(226, 482)">
        <polygon points="-44,32 34,32 24,-18 -34,-18" fill="#2c1d13" stroke="#8b6843" strokeWidth="1.2" />
        <polygon points="-28,-22 26,-28 32,-16 -24,-14" fill="#f4ead5" />
        <circle cx="-4" cy="-64" r="11" fill="#120c08" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.45" />
        <path d="M-20,-50 C-8,-54 6,-54 14,-48 L18,32 L-22,32 Z" fill="#120c08" stroke="#d4af37" strokeWidth="1" strokeOpacity="0.35" />
      </g>

      {/* Right Scholar-Engineer */}
      <g transform="translate(466, 482)">
        <polygon points="-36,32 42,32 32,-18 -26,-18" fill="#2c1d13" stroke="#8b6843" strokeWidth="1.2" />
        <polygon points="-26,-26 24,-20 20,-12 -28,-16" fill="#f4ead5" />
        <circle cx="8" cy="-64" r="11" fill="#120c08" stroke="#d96b43" strokeWidth="1" strokeOpacity="0.55" />
        <path d="M-12,-48 C-2,-54 12,-54 24,-48 L26,32 L-16,32 Z" fill="#120c08" stroke="#d96b43" strokeWidth="1" strokeOpacity="0.4" />
      </g>
    </svg>
  );
}

export function FoundryColumnsIllustration() {
  return (
    <svg
      viewBox="0 0 640 560"
      aria-hidden="true"
      className="h-auto w-full select-none drop-shadow-[0_24px_48px_rgba(0,0,0,0.6)]"
    >
      <defs>
        <linearGradient id="davinci-foundry-bg" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#271911" />
          <stop offset="100%" stopColor="#140d09" />
        </linearGradient>

        <radialGradient id="davinci-foundry-forge" cx="52%" cy="68%" r="48%">
          <stop offset="0%" stopColor="#f6d28b" stopOpacity="0.42" />
          <stop offset="45%" stopColor="#d96b43" stopOpacity="0.24" />
          <stop offset="100%" stopColor="#140d09" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="davinci-foundry-water" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#89b4e3" stopOpacity="0.88" />
          <stop offset="100%" stopColor="#5c92c8" stopOpacity="0.45" />
        </linearGradient>

        <linearGradient id="davinci-foundry-flame" x1="0" y1="1" x2="0" y2="0">
          <stop offset="0%" stopColor="#d96b43" />
          <stop offset="55%" stopColor="#e8c97a" />
          <stop offset="100%" stopColor="#fff4d2" />
        </linearGradient>
      </defs>

      {/* Vaulted Renaissance workshop backdrop */}
      <rect
        x="16"
        y="16"
        width="608"
        height="528"
        rx="20"
        fill="url(#davinci-foundry-bg)"
        stroke="#8b6843"
        strokeWidth="2"
        strokeOpacity="0.5"
      />
      <rect x="28" y="28" width="584" height="504" rx="14" fill="url(#davinci-foundry-forge)" />

      {/* Three vaulted stone arches */}
      {[124, 320, 516].map((ax) => (
        <path
          key={ax}
          d={`M${ax - 82},462 L${ax - 82},156 A82,82 0 0 1 ${ax + 82},156 L${ax + 82},462`}
          fill="#100a07"
          fillOpacity="0.45"
          stroke="#8b6843"
          strokeWidth="2"
          strokeOpacity="0.45"
        />
      ))}

      {/* BAY 1 (LEFT): DA VINCI ARCHIMEDES WATER SCREWS */}
      <g transform="translate(124, 290)">
        {/* Basin at bottom */}
        <rect x="-64" y="138" width="128" height="32" rx="4" fill="#2c1d13" stroke="#d4af37" strokeWidth="1.2" strokeOpacity="0.5" />
        <rect x="-56" y="142" width="112" height="10" rx="2" fill="url(#davinci-foundry-water)" />

        {/* Angled Archimedes Screw Cylinder */}
        <g transform="rotate(-24)">
          <rect
            x="-22"
            y="-148"
            width="44"
            height="278"
            rx="10"
            fill="#1f2d3d"
            fillOpacity="0.6"
            stroke="#e8c97a"
            strokeWidth="2"
          />
          <line x1="0" y1="-158" x2="0" y2="138" stroke="#d4af37" strokeWidth="4" />
          {/* Helical screw blades lifting lapis water */}
          {[-120, -84, -48, -12, 24, 60, 96].map((sy) => (
            <path
              key={sy}
              d={`M-20,${sy} Q0,${sy - 16} 20,${sy + 8}`}
              fill="none"
              stroke="url(#davinci-foundry-water)"
              strokeWidth="9"
              strokeLinecap="round"
            />
          ))}
        </g>
        {/* Top hand crank */}
        <path d="M54,-134 L76,-142 L76,-122" fill="none" stroke="#e8c97a" strokeWidth="3" strokeLinecap="round" />
      </g>

      {/* BAY 2 (CENTER): MECHANICAL PRINTING / COINING PRESS & ALCHEMICAL ALEMBIC */}
      <g transform="translate(320, 295)">
        {/* Heavy walnut press frame */}
        <rect x="-62" y="-120" width="14" height="285" fill="#3a2417" stroke="#8b6843" strokeWidth="1.2" />
        <rect x="48" y="-120" width="14" height="285" fill="#3a2417" stroke="#8b6843" strokeWidth="1.2" />
        <rect x="-70" y="-134" width="140" height="20" rx="3" fill="#4c3322" stroke="#d4af37" strokeWidth="1.4" />
        <rect x="-68" y="64" width="136" height="18" rx="3" fill="#4c3322" stroke="#d4af37" strokeWidth="1.4" />

        {/* Threaded central screw & weighted flywheel crossbar */}
        <rect x="-9" y="-162" width="18" height="184" fill="#d4af37" />
        {[-106, -90, -74, -58, -42, -26].map((ty) => (
          <line key={ty} x1="-10" y1={ty} x2="10" y2={ty + 6} stroke="#4c3322" strokeWidth="2.5" />
        ))}
        {/* Weighted flywheel bar */}
        <line x1="-74" y1="-152" x2="74" y2="-152" stroke="#e8c97a" strokeWidth="4" />
        <circle cx="-74" cy="-152" r="10" fill="#d96b43" stroke="#f6d28b" strokeWidth="1.5" />
        <circle cx="74" cy="-152" r="10" fill="#d96b43" stroke="#f6d28b" strokeWidth="1.5" />

        {/* Platen & glowing die impression */}
        <rect x="-42" y="18" width="84" height="18" fill="#e8c97a" />
        <rect x="-34" y="54" width="68" height="10" fill="#f6d28b" opacity="0.85" />

        {/* Forge flames underneath */}
        <g transform="translate(0, 152)">
          <rect x="-44" y="-16" width="88" height="26" rx="4" fill="#23160e" stroke="#8b6843" strokeWidth="1.2" />
          <path d="M-26,-16 Q-18,-56 -8,-16 Z" fill="url(#davinci-foundry-flame)" className="jet-pulse" style={{ "--jet-delay": "0s" } as CSSProperties} />
          <path d="M-10,-16 Q0,-68 10,-16 Z" fill="url(#davinci-foundry-flame)" className="jet-pulse" style={{ "--jet-delay": "-0.6s" } as CSSProperties} />
          <path d="M8,-16 Q18,-52 26,-16 Z" fill="url(#davinci-foundry-flame)" className="jet-pulse" style={{ "--jet-delay": "-1.2s" } as CSSProperties} />
        </g>
      </g>

      {/* BAY 3 (RIGHT): ALCHEMICAL DISTILLATION ALEMBICS & POLYHEDRAL CRYSTAL PEDESTAL */}
      <g transform="translate(516, 300)">
        {/* Distillation retort & condenser */}
        <circle cx="-22" cy="-76" r="24" fill="#d96b43" fillOpacity="0.35" stroke="#e8c97a" strokeWidth="1.8" />
        <path d="M-4,-92 Q32,-106 38,-48" fill="none" stroke="#89b4e3" strokeWidth="3" strokeLinecap="round" />
        <ellipse cx="38" cy="-34" rx="14" ry="18" fill="#5c92c8" fillOpacity="0.45" stroke="#89b4e3" strokeWidth="1.4" />
        {/* Tripod burner */}
        <line x1="-38" y1="-22" x2="-26" y2="-52" stroke="#8b6843" strokeWidth="2.5" />
        <line x1="-6" y1="-22" x2="-18" y2="-52" stroke="#8b6843" strokeWidth="2.5" />
        <path d="M-28,-22 Q-22,-46 -16,-22 Z" fill="url(#davinci-foundry-flame)" className="jet-pulse" />

        {/* Fluted stone pedestal */}
        <rect x="-34" y="84" width="68" height="82" fill="#2c1d13" stroke="#8b6843" strokeWidth="1.4" />
        <rect x="-42" y="74" width="84" height="12" rx="2" fill="#4c3322" stroke="#d4af37" strokeWidth="1.2" />
        <rect x="-42" y="164" width="84" height="12" rx="2" fill="#4c3322" stroke="#d4af37" strokeWidth="1.2" />

        {/* Illuminated floating polyhedral crystal */}
        <g transform="translate(0, 34)" className="orb-float" style={{ "--float-delay": "-1.8s" } as CSSProperties}>
          <polygon points="0,-30 26,-10 18,24 -18,24 -26,-10" fill="#89b4e3" fillOpacity="0.55" stroke="#f6d28b" strokeWidth="1.8" />
          <polygon points="0,-30 12,-2 0,24 -12,-2" fill="#f6d28b" fillOpacity="0.48" stroke="#fff4d2" strokeWidth="1" />
        </g>
      </g>

      {/* Stone workshop floor */}
      <rect x="24" y="462" width="592" height="58" rx="4" fill="#18100b" stroke="#8b6843" strokeWidth="1" strokeOpacity="0.4" />
    </svg>
  );
}

export function HorizonArchwayIllustration() {
  return (
    <svg
      viewBox="0 0 1440 680"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 size-full select-none"
    >
      <defs>
        <linearGradient id="davinci-arch-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#3c241b" />
          <stop offset="35%" stopColor="#945032" />
          <stop offset="68%" stopColor="#e29958" />
          <stop offset="100%" stopColor="#fae0a2" />
        </linearGradient>

        <radialGradient id="davinci-arch-sun" cx="50%" cy="62%" r="36%">
          <stop offset="0%" stopColor="#fff8e0" stopOpacity="0.96" />
          <stop offset="45%" stopColor="#f6d28b" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#945032" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="davinci-arch-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#e8b878" />
          <stop offset="45%" stopColor="#5c92c8" />
          <stop offset="100%" stopColor="#1b2d42" />
        </linearGradient>

        <linearGradient id="davinci-arch-stone" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#261a12" />
          <stop offset="100%" stopColor="#130c08" />
        </linearGradient>
      </defs>

      {/* Radiant Tuscan sunrise over hills & sea */}
      <rect width="1440" height="680" fill="url(#davinci-arch-sky)" />
      <rect width="1440" height="520" fill="url(#davinci-arch-sun)" />

      {/* Distant Tuscan hills flanking the sea */}
      <path d="M240,420 Q440,335 640,420 L240,420 Z" fill="#5e3422" opacity="0.82" />
      <path d="M800,420 Q1000,335 1200,420 L800,420 Z" fill="#5e3422" opacity="0.82" />

      {/* Sunlit Mediterranean sea & golden reflection */}
      <rect x="260" y="418" width="920" height="170" fill="url(#davinci-arch-sea)" />
      <polygon points="695,418 745,418 795,588 645,588" fill="#fae0a2" opacity="0.52" />

      {/* Perspective stone floor */}
      <polygon points="0,585 280,520 1160,520 1440,585 1440,680 0,680" fill="#18110c" />

      {/* Coffered Renaissance stone archway framing the horizon */}
      <path
        d="M0,0 L1440,0 L1440,680 L1145,680 L1145,320 A425,270 0 0 0 295,320 L295,680 L0,680 Z"
        fill="url(#davinci-arch-stone)"
      />

      {/* Archway intrados coffers & stone voussoirs */}
      <path
        d="M295,680 L295,320 A425,270 0 0 1 1145,320 L1145,680"
        fill="none"
        stroke="#d4af37"
        strokeWidth="3"
        strokeOpacity="0.6"
      />
      <path
        d="M250,680 L250,315 A470,305 0 0 1 1190,315 L1190,680"
        fill="none"
        stroke="#8b6843"
        strokeWidth="2"
        strokeOpacity="0.5"
      />

      {/* Inscribed Vitruvian compass lines & golden-ratio circuit flow */}
      <g fill="none" stroke="#e8c97a" strokeOpacity="0.65">
        <path
          d="M295,320 A425,270 0 0 1 1145,320"
          strokeWidth="2.2"
          className="circuit-flow"
        />
        <path
          d="M140,645 L295,520 M1300,645 L1145,520"
          strokeWidth="1.6"
          className="circuit-flow"
        />
      </g>

      {/* Left & Right Golden Compass Roses carved into pilasters */}
      {[148, 1292].map((rx) => (
        <g key={rx} transform={`translate(${rx}, 380)`} fill="none" stroke="#d4af37" strokeOpacity="0.52">
          <circle r="44" strokeWidth="1.5" />
          <circle r="28" strokeWidth="1" strokeDasharray="4 4" className="compass-spin" />
          <polygon points="0,-40 7,-7 40,0 7,7 0,40 -7,7 -40,0 -7,-7" strokeWidth="1.2" />
        </g>
      ))}
    </svg>
  );
}
