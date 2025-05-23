import type { SVGProps } from "react";
export const SvgSkipPrevious = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-480h72v480h-72Zm480-24L384-480l336-216v432Zm-72-216Zm0 84v-168l-131 84 131 84Z" />
  </svg>
);
