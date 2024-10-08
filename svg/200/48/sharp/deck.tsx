import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M464.62-100v-520H143.08L480-855.38 816.92-620H495.38v520h-30.76ZM480-650.77h238.46-476.92H480ZM140-100v-207.15L111.08-466l30.3-4.62 29.7 159.85h159.69V-100H300v-180H170.77v180H140Zm489.23 0v-210.77h159.69l29.7-159.85 30.3 4.62L820-307.15V-100h-30.77v-180H660v180h-30.77ZM241.54-650.77h476.92L480-818.54 241.54-650.77Z" />
  </svg>
);
