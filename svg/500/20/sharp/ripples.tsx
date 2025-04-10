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
    <path d="M218.87-218.87h522.26v-323.15q-16.76 9.04-34.08 13.56-17.31 4.53-35.05 4.53-61.91 0-104.99-43.08t-43.08-104.92q0-18.18 4.53-35.31 4.52-17.13 13.56-33.89H218.87v522.26Zm-83 83v-688.26h688.26v688.26H135.87Zm83-605.26v522.26-522.26Z" />
  </svg>
);
