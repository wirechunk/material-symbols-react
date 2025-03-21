import type { SVGProps } from "react";
export const SvgInput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-192q-29.7 0-50.85-21.15Q96-234.3 96-264v-120h72v120h624v-432H168v120H96v-120q0-30 21.15-51T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm240-120-51-51 81-81H96v-72h342l-81-81 51-51 168 168-168 168Z" />
  </svg>
);
