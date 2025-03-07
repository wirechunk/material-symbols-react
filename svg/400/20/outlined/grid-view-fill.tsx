import type { SVGProps } from "react";
export const SvgGridViewFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-528v-288h288v288H144Zm0 384v-288h288v288H144Zm384-384v-288h288v288H528Zm0 384v-288h288v288H528Z" />
  </svg>
);
