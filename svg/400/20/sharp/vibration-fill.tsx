import type { SVGProps } from "react";
export const SvgVibrationFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M0-360v-240h72v240H0Zm120 72v-384h72v384h-72Zm768-72v-240h72v240h-72Zm-120 72v-384h72v384h-72ZM240-144v-672h480v672H240Z" />
  </svg>
);
