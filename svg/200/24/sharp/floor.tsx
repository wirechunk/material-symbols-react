import type { SVGProps } from "react";
export const SvgFloor = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-100v-40h140v-180h180v-180h180v-180h180v-140h40v180H680v180H500v180H320v180H140Z" />
  </svg>
);
