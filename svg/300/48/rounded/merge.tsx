import type { SVGProps } from "react";
export const SvgMerge = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-364 271.61-155.62q-6.69 6.7-15.61 6.5-8.92-.19-15.61-6.88-6.7-6.69-6.7-15.81 0-9.11 6.7-15.81l176.53-176.15q25.16-25.15 32.77-43.62 7.62-18.46 7.62-57.46v-269.61l-77.85 77.84q-6.69 6.7-15.61 6.7-8.93 0-15.62-6.7-6.69-6.69-6.69-15.61 0-8.92 6.69-15.62l111.54-111.92q8.61-8.61 20.23-8.61 11.62 0 20.23 8.61l111.92 111.92q6.7 6.7 6.7 15.62 0 8.92-6.7 15.23-6.69 7.08-15.8 7.08-9.12 0-15.81-7.08l-77.85-77.46v269.61q0 39 8 57.85t33.16 44L720-187.23q6.69 6.69 6.69 15.61 0 8.93-6.69 15.62-6.69 6.69-15.81 6.69-9.11 0-15.8-6.69L480-364Z" />
  </svg>
);
