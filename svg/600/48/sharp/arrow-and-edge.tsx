import type { SVGProps } from "react";
export const SvgArrowAndEdge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480.57-105.87 320.43-265.43l56.14-57.7 64.39 64.95v-189.38q0-30.09-20.9-50.7-20.89-20.61-50.41-20.61H23.04V-854.7h79.79v256.61h266.82q33.22 0 61.59 12.98 28.37 12.98 49.33 35.94 20.95-22.96 49.32-35.94 28.37-12.98 61.59-12.98h266.26V-854.7h79.22v335.83H590.91q-30.08 0-50.41 20.61t-20.33 50.7v189.38l64.4-63.39 55.56 56.14-159.56 159.56Z" />
  </svg>
);
