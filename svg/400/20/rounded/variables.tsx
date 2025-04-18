import type { SVGProps } from "react";
export const SvgVariables = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-324v-312q0-15.3 10.35-25.65Q164.7-672 180-672h600q15.3 0 25.65 10.35Q816-651.3 816-636v312q0 15.3-10.35 25.65Q795.3-288 780-288H180q-15.3 0-25.65-10.35Q144-308.7 144-324Zm72-36h528v-240H216v240Zm0 0v-240 240Z" />
  </svg>
);
