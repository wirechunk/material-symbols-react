import type { SVGProps } from "react";
export const SvgSwitchFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-288h288v-384H336v384Zm72-72v-240h144v240H408Zm36-120h72v-72h-72v72ZM144-144v-672h672v672H144Z" />
  </svg>
);
