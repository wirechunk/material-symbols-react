import type { SVGProps } from "react";
export const SvgDragPanFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-109.85 325.85-264l36.77-36.77L454-209.38V-454H209l91.38 91.77L264-325.85 109.85-480l154.53-154.54 36.77 36.77L209.38-506H454v-244.62l-91.38 91.39L325.85-696 480-850.15 634.15-696l-36.77 36.77L506-750.62V-506h245l-91.38-91.77L696-634.15 850.15-480 696-325.85l-36.77-36.77L750.62-454H506v245l91.77-91.38L634.15-264 480-109.85Z" />
  </svg>
);
