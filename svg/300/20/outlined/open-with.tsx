import type { SVGProps } from "react";
export const SvgOpenWith = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-109.85 325.85-264l36.77-36.77L454-209.38V-398h52v189l91.77-91.38L634.15-264 480-109.85Zm-216-216L109.85-480l154.53-154.54 36.77 36.77L209.38-506H398v52H209l91.38 91.77L264-325.85Zm432 0-36.77-36.77L750.62-454H562v-52h189l-91.38-91.77L696-634.15 850.15-480 696-325.85ZM454-562v-188.62l-91.38 91.39L325.85-696 480-850.15 634.15-696l-36.77 36.77L506-750.62V-562h-52Z" />
  </svg>
);
