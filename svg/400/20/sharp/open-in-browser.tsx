import type { SVGProps } from "react";
export const SvgOpenInBrowser = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-144v-672h672v672H576v-72h168v-456H216v456h168v72H144Zm300 0v-246l-57 57-51-51 144-144 144 144-51 51-57-57v246h-72Z" />
  </svg>
);
