import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm60-500h560v-120H200v120Zm560 60H200v380h560v-380Zm-560-60v60-60Zm0 0v-120 120Zm0 60v380-380Z" />
  </svg>
);
