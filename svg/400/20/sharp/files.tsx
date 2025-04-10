import type { SVGProps } from "react";
export const SvgFiles = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-528h288l48-48h432v576H96Zm126-264h186v-186L222-456Zm-54-48 144-144H168v144Zm0 120v120h624v-432H480v312H168Zm240-144Z" />
  </svg>
);
