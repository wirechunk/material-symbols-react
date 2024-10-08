import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M218.87-218.87h522.26v-323.15q-16.76 9.04-34.08 13.56-17.31 4.53-35.05 4.53-61.91 0-104.99-43.08t-43.08-104.92q0-18.18 4.53-35.31 4.52-17.13 13.56-33.89H218.87v522.26Zm0 83q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-522.26q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h522.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v522.26q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H218.87Zm0-605.26v522.26-522.26Z" />
  </svg>
);
