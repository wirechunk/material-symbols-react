import type { SVGProps } from "react";
export const SvgStack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M260-380v60H80v-560h560v180h-60v-120H140v440h120Zm60 300v-560h560v560H320Zm60-60h440v-440H380v440Zm220-220Z" />
  </svg>
);
