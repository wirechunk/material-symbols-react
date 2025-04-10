import type { SVGProps } from "react";
export const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M706-58v-144H202v-504H58v-52h144v-144h52v648h648v52H758v144h-52Zm0-248v-400H306v-52h452v452h-52Z" />
  </svg>
);
