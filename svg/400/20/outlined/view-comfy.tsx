import type { SVGProps } from "react";
export const SvgViewComfy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm696-324v-180H168v180h624ZM408-264h384v-180H408v180Zm-240 0h168v-180H168v180Z" />
  </svg>
);
