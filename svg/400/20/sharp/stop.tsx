import type { SVGProps } from "react";
export const SvgStop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-624v288-288Zm-72 360v-432h432v432H264Zm72-72h288v-288H336v288Z" />
  </svg>
);
