import type { SVGProps } from "react";
export const SvgExpandContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M194.5-194.5v-251h91v160h160v91h-251Zm480-320v-160h-160v-91h251v251h-91Z" />
  </svg>
);
