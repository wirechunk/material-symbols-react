import type { SVGProps } from "react";
export const SvgWeb = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M145.09-145.87q-32.51 0-55.87-23.35-23.35-23.36-23.35-55.87v-509.82q0-32.74 23.35-56.26 23.36-23.53 55.87-23.53h669.82q32.74 0 56.26 23.53 23.53 23.52 23.53 56.26v509.82q0 32.51-23.53 55.87-23.52 23.35-56.26 23.35H145.09Zm0-79.22h450.82v-163H145.09v163Zm510.82 0h159v-386h-159v386Zm-510.82-223h450.82v-163H145.09v163Z" />
  </svg>
);
