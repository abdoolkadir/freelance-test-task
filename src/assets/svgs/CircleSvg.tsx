const CircleSvg = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="219"
      height="219"
      viewBox="0 0 219 219"
      fill="none"
    >
      <g filter="url(#filter0_b_797_528)">
        <circle cx="109.5" cy="109.5" r="109.5" fill="#080808" />
        <circle
          cx="109.5"
          cy="109.5"
          r="109"
          stroke="#343434"
          strokeOpacity="0.5"
        />
        <circle
          cx="109.5"
          cy="109.5"
          r="109"
          stroke="url(#paint0_linear_797_528)"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_797_528"
          x="-20"
          y="-20"
          width="259"
          height="259"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_797_528"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_797_528"
            result="shape"
          />
        </filter>
        <linearGradient
          id="paint0_linear_797_528"
          x1="-9.46296"
          y1="96.36"
          x2="175.84"
          y2="106.807"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#868686" />
          <stop offset="1" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};
export default CircleSvg;
