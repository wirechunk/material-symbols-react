import type { SVGProps } from "react";
export const SvgOpenWithFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96 312-264l51-51 81 81v-174h72v174l81-81 51 51L480-96ZM264-312 96-480l168-168 51 51-81 81h174v72H234l81 81-51 51Zm432 0-51-51 81-81H552v-72h174l-81-81 51-51 168 168-168 168ZM444-552v-174l-81 81-51-51 168-168 168 168-51 51-81-81v174h-72Z" />
  </svg>
);
