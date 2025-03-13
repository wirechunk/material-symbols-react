import type { SVGProps } from "react";
export const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-360v-240h60v180h520v-180h60v240H160Z" />
  </svg>
);
