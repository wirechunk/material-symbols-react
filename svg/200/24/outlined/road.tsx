import type { SVGProps } from "react";
export const SvgRoad = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200v-560h40v560h-40Zm260 0v-123.08h40V-200h-40Zm260 0v-560h40v560h-40ZM460-418.46v-123.08h40v123.08h-40Zm0-218.46V-760h40v123.08h-40Z" />
  </svg>
);
