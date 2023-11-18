const LockCircleSvg = () => {
  return (
    <svg
      width="60"
      height="48"
      viewBox="0 0 60 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_797_558)">
        <rect x="6" width="48" height="48" rx="24" fill="#080808" />
        <rect
          x="6.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="#343434"
          strokeOpacity="0.5"
        />
        <rect
          x="6.5"
          y="0.5"
          width="47"
          height="47"
          rx="23.5"
          stroke="url(#paint0_linear_797_558)"
        />
      </g>
      <path
        d="M30 27L30 28.6667"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="23"
        y="21"
        width="14"
        height="12"
        rx="5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M35 22V21C35 18.2386 32.7614 16 30 16V16C27.2386 16 25 18.2386 25 21V22"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <defs>
        <filter
          id="filter0_b_797_558"
          x="-14"
          y="-20"
          width="88"
          height="88"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_797_558"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_797_558"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_797_558"
          x1="3.92593"
          y1="21.12"
          x2="44.5403"
          y2="23.4097"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#868686" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default LockCircleSvg;
