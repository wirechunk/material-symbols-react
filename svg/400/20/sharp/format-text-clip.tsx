import type { SVGProps } from "react";
export const SvgFormatTextClip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-192v-576h72v576h-72Zm504 0v-252H336v-72h360v-252h72v576h-72Z" />
  </svg>
);
