import type { SVGProps } from "react";
export const SvgMoving = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M149.26-245.13 85.83-308l201.65-202.22q37.82-37.82 91.22-37.82 53.39 0 91.21 37.82l34 34q11.74 11.74 27.79 11.74 16.04 0 27.78-11.74l162.3-163.3H617.22v-88.96h256.95v256.96h-88.95v-104.57L621.91-413.78q-37.82 37.82-91.21 37.82-53.4 0-91.22-37.82l-33-33q-11.74-11.74-27.5-11.74t-27.5 11.74L149.26-245.13Z" />
  </svg>
);
