import type { SVGProps } from "react";
export const SvgCalendarViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-192q-29 0-50.5-21.5T96-264v-432q0-29 21.5-50.5T168-768h624q29.7 0 50.85 21.5Q864-725 864-696v432q0 29-21.15 50.5T792-192H168Zm348-72h102v-432H516v432Zm-174 0h102v-432H342v432Zm-174 0h102v-432H168v432Zm522 0h102v-432H690v432Z" />
  </svg>
);
