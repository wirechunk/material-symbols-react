import type { SVGProps } from "react";
export const SvgWorkFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-120v-600h240v-160h320v160h240v600H80Zm300-600h200v-100H380v100Z" />
  </svg>
);
