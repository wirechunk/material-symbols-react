import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm0-72h624v-432H168v432Zm276-120-58-77q-5.25-8-14-8t-14 8l-71.82 96.03Q279-356 284.25-346q5.25 10 15.75 10h360.19Q671-336 676-346t-2-19L566-509q-5.25-8-14-8t-14 8l-94 125ZM168-264v-432 432Z" />
  </svg>
);
