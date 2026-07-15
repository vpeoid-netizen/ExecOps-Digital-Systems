/**
 * Abstract illustrative gateway scene inspired by connected institutional systems.
 * Decorative only — logos remain the official brand assets.
 */
export function HeroIllustration() {
  return (
    <svg
      viewBox="0 0 420 420"
      role="img"
      aria-label="Illustrated gateway connecting digital systems"
      className="h-full w-full"
    >
      <defs>
        <linearGradient id="illust-navy" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#10294D" />
          <stop offset="100%" stopColor="#071F46" />
        </linearGradient>
        <linearGradient id="illust-gold" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7B918" />
          <stop offset="100%" stopColor="#A47B00" />
        </linearGradient>
        <linearGradient id="illust-sky" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#DCE8F7" />
          <stop offset="100%" stopColor="#B8CDE6" />
        </linearGradient>
      </defs>

      {/* Soft ground blob */}
      <ellipse cx="210" cy="340" rx="150" ry="28" fill="#304E70" opacity="0.12" />

      {/* Background ribbon shapes */}
      <path
        d="M40 120 C90 40, 180 50, 220 110 C260 170, 340 150, 380 90"
        fill="none"
        stroke="url(#illust-gold)"
        strokeWidth="18"
        strokeLinecap="round"
        opacity="0.35"
      />
      <path
        d="M30 220 C100 160, 170 250, 250 200 C320 160, 360 230, 400 190"
        fill="none"
        stroke="url(#illust-navy)"
        strokeWidth="22"
        strokeLinecap="round"
        opacity="0.45"
      />

      {/* Central portal card */}
      <rect
        x="118"
        y="98"
        width="184"
        height="220"
        rx="28"
        fill="url(#illust-sky)"
      />
      <rect
        x="130"
        y="110"
        width="160"
        height="196"
        rx="22"
        fill="#FFFFFF"
      />

      {/* Window / screen */}
      <rect x="148" y="132" width="124" height="78" rx="12" fill="#10294D" />
      <rect x="158" y="142" width="48" height="10" rx="5" fill="#F7B918" />
      <rect x="158" y="160" width="104" height="8" rx="4" fill="#304E70" opacity="0.5" />
      <rect x="158" y="176" width="78" height="8" rx="4" fill="#304E70" opacity="0.35" />

      {/* Mini system cards inside illustration */}
      <rect x="148" y="226" width="56" height="44" rx="10" fill="#EEF3FA" />
      <circle cx="166" cy="242" r="7" fill="#F7B918" />
      <rect x="178" y="248" width="18" height="5" rx="2.5" fill="#304E70" opacity="0.35" />

      <rect x="214" y="226" width="56" height="44" rx="10" fill="#EEF3FA" />
      <circle cx="232" cy="242" r="7" fill="#304E70" />
      <rect x="244" y="248" width="18" height="5" rx="2.5" fill="#304E70" opacity="0.35" />

      {/* Orbiting nodes (systems) */}
      <circle cx="78" cy="150" r="22" fill="#FFFFFF" stroke="#DCE4EE" strokeWidth="3" />
      <path d="M70 150 h16 M78 142 v16" stroke="#F7B918" strokeWidth="3" strokeLinecap="round" />

      <circle cx="342" cy="168" r="22" fill="#FFFFFF" stroke="#DCE4EE" strokeWidth="3" />
      <circle cx="342" cy="168" r="8" fill="none" stroke="#304E70" strokeWidth="3" />
      <circle cx="342" cy="168" r="2.5" fill="#F7B918" />

      <circle cx="96" cy="280" r="20" fill="#FFFFFF" stroke="#DCE4EE" strokeWidth="3" />
      <rect x="88" y="272" width="16" height="16" rx="3" fill="none" stroke="#071F46" strokeWidth="2.5" />

      <circle cx="330" cy="270" r="20" fill="#FFFFFF" stroke="#DCE4EE" strokeWidth="3" />
      <path
        d="M322 274 l6 6 10-12"
        fill="none"
        stroke="#A47B00"
        strokeWidth="2.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connection lines */}
      <path d="M100 155 L130 175" stroke="#304E70" strokeWidth="2" strokeDasharray="4 5" opacity="0.45" />
      <path d="M320 175 L302 190" stroke="#304E70" strokeWidth="2" strokeDasharray="4 5" opacity="0.45" />
      <path d="M116 275 L145 255" stroke="#304E70" strokeWidth="2" strokeDasharray="4 5" opacity="0.45" />
      <path d="M310 265 L285 250" stroke="#304E70" strokeWidth="2" strokeDasharray="4 5" opacity="0.45" />
    </svg>
  );
}
