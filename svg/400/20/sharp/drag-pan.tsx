import type { SVGProps } from "react";
export const SvgDragPan = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96 312-264l51-51 81 81v-210H234l81 81-51 51L96-480l168-168 51 51-81 81h210v-210l-81 81-51-51 168-168 168 168-51 51-81-81v210h210l-81-81 51-51 168 168-168 168-51-51 81-81H516v210l81-81 51 51L480-96Z" />
  </svg>
);
