import type { SVGProps } from "react";
export const SvgTableChartView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m290-96-50-50 264-264 144 144 213-214 51 51-264 264-144-144L290-96Zm-122-48q-30 0-51-21.15T96-216v-528q0-29 21.5-50.5T168-816h528q29 0 50.5 21.5T768-744v160H168v440Zm0-512h528v-88H168v88Zm0 0v-88 88Z" />
  </svg>
);
