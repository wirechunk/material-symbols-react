import type { SVGProps } from "react";
export const SvgStraighten = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-240q-29.7 0-50.85-21.15Q96-282.3 96-312v-336q0-29.7 21.15-50.85Q138.3-720 168-720h624q29.7 0 50.85 21.15Q864-677.7 864-648v336q0 29.7-21.15 50.85Q821.7-240 792-240H168Zm0-72h624v-336H672v168h-72v-168h-84v168h-72v-168h-84v168h-72v-168H168v336Zm120-168h72-72Zm156 0h72-72Zm156 0h72-72Zm-120 0Z" />
  </svg>
);
