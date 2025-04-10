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
    <path d="M696-48v-144H192v-504H48v-72h144v-144h72v648h648v72H768v144h-72Zm0-288v-360H336v-72h432v432h-72Z" />
  </svg>
);
