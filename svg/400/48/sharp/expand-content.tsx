import type { SVGProps } from "react";
export const SvgExpandContent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-200v-240h60v180h180v60H200Zm500-320v-180H520v-60h240v240h-60Z" />
  </svg>
);
