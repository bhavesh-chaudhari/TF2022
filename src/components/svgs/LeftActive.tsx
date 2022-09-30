import * as React from "react";
import { SVGProps } from "react";

const SvgLeftActive = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={39}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M23.732 4.788 8.837 19.683l14.895 14.895-4.007 4.008L.823 19.683 19.725.78l4.007 4.008Z"
      fill="#fff"
    />
  </svg>
);

export default SvgLeftActive;
