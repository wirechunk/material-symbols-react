import type { SVGProps } from "react";
export const SvgBrickFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-432h120v-144h216v144h96v-144h216v144h120v432H96Z" />
  </svg>
);
