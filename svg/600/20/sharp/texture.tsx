import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M125.91-125.91v-69.66l637.52-638.52h70.09v70.66L195.57-125.91h-69.66Zm-1.13-218.91V-484.7L475.3-835.22h139.88l-490.4 490.4Zm0-281.83v-208.57h208.57L124.78-626.65Zm510.87 501.87 199.57-199.57v199.57H635.65Zm-290.83 0 490.4-490.4v139.88L484.7-124.78H344.82Z" />
  </svg>
);
