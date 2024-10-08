import type { SVGProps } from "react";
export const SvgElevator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M320.48-264h96v-132h48v-168h-192v168h48v132Zm47.89-336q20.11 0 34.11-13.89 14-13.88 14-34 0-20.11-13.89-34.11t-34-14q-20.11 0-34.11 13.89-14 13.88-14 34 0 20.11 13.89 34.11 13.88 14 34 14Zm155.11 72h168l-84-144-84 144Zm84 240 84-144h-168l84 144Zm-482.7 163.22v-710.44h710.44v710.44H124.78Zm98-98h514.44v-514.44H222.78v514.44Zm0 0v-514.44 514.44Z" />
  </svg>
);
