import type { SVGProps } from "react";
export const SvgBorderAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H144Zm600-72v-228H516v228h228Zm0-528H516v228h228v-228Zm-528 0v228h228v-228H216Zm0 528h228v-228H216v228Z" />
  </svg>
);
