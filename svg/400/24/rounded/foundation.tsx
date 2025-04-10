import type { SVGProps } from "react";
export const SvgFoundation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M280-280v120q0 17-11.5 28.5T240-120q-17 0-28.5-11.5T200-160v-120h-40q-17 0-28.5-11.5T120-320q0-17 11.5-28.5T160-360h40v-166l-80 61q-14 10-30 8.5T64-472q-10-14-8-30t16-26l359-275q11-8 23.5-12t25.5-4q13 0 25.5 4t23.5 12l359 275q13 10 15.5 26t-7.5 30q-10 14-26 15.5t-30-8.5l-80-61v166h40q17 0 28.5 11.5T840-320q0 17-11.5 28.5T800-280h-40v120q0 17-11.5 28.5T720-120q-17 0-28.5-11.5T680-160v-120H520v120q0 17-11.5 28.5T480-120q-17 0-28.5-11.5T440-160v-120H280Zm0-80h160v-349L280-587v227Zm240 0h160v-227L520-709v349Z" />
  </svg>
);
