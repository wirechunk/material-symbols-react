import type { SVGProps } from "react";
export const SvgSensorWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-144v-672h576v672H192Zm72-372h144v-36h144v36h144v-228H264v228Zm0 72v228h432v-228H264Zm0 228h432-432Z" />
  </svg>
);
