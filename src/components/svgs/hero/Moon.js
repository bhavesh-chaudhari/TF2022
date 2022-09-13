import * as React from "react";

const SvgMoon = (props) => (
  <svg
    width={620}
    height={943}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#moon_svg__a)">
      <circle cx={120} cy={500} r={190} fill="#F4F6F0" />
    </g>
    <circle
      cx={49.5}
      cy={381.5}
      r={13.5}
      transform="rotate(-180 49.5 381.5)"
      fill="#D9D9D9"
    />
    <circle
      cx={36.5}
      cy={405.5}
      r={6.5}
      transform="rotate(-180 36.5 405.5)"
      fill="#D9D9D9"
    />
    <circle
      cx={272.5}
      cy={466.5}
      r={6.5}
      transform="rotate(-180 272.5 466.5)"
      fill="#D9D9D9"
    />
    <circle
      cx={26}
      cy={391}
      r={4}
      transform="rotate(-180 26 391)"
      fill="#D9D9D9"
    />
    <circle
      cx={262}
      cy={479}
      r={4}
      transform="rotate(-180 262 479)"
      fill="#D9D9D9"
    />
    <defs>
      <filter
        id="moon_svg__a"
        x={-320}
        y={60}
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
        <feColorMatrix values="0 0 0 0 0.956863 0 0 0 0 0.964706 0 0 0 0 0.941176 0 0 0 1 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_163_430" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_163_430"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default SvgMoon;
