import * as React from "react";

const SvgSun = (props) => (
  <svg
    width={555}
    height={880}
    viewBox="0 0 555 880"
    preserveAspectRatio="none"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#sun_svg__a)">
      <circle cx={440} cy={440} r={190} fill="#FDF6CA" />
    </g>
    <defs>
      <filter
        id="sun_svg__a"
        x={0}
        y={0}
        width={880}
        height={880}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation={125} />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix values="0 0 0 0 0.996078 0 0 0 0 0.937255 0 0 0 0 0.533333 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_350_633" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_350_633"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgSun;
