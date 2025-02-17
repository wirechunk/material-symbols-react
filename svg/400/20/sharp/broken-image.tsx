import type { SVGProps } from "react";
export const SvgBrokenImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm120-303 144-144 144 144 144-144 48 48v-201H216v249l48 48Zm-48 231h528v-225l-48-48-144 144-144-144-144 144-48-48v177Zm0 0v-240 63-351 528Z" />
  </svg>
);
