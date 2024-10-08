import type { SVGProps } from "react";
export const SvgMusicNote = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M408-144q-60 0-102-42t-42-102q0-60 42-102t102-42q20 0 38 5.5t34 14.5v-404h216v144H552v384q0 60-42 102t-102 42Z" />
  </svg>
);
