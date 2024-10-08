import type { SVGProps } from "react";
export const SvgStart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-240v-480h60v480H80Zm559 1-43-42 169-169H239v-60h526L597-679l42-42 241 241-241 241Z" />
  </svg>
);
