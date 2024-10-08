import type { SVGProps } from "react";
export const SvgPackageFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M288-288h192v-72H288v72ZM144-144v-672h672v672H144Zm192-600v312l144-72 144 72v-312H336Z" />
  </svg>
);
