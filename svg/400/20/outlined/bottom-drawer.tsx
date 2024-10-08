import type { SVGProps } from "react";
export const SvgBottomDrawer = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-144q-29 0-50.5-21.5T144-216v-528q0-29.7 21.5-50.85Q187-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29-21.15 50.5T744-144H216Zm0-316q17-9 35.19-14.5Q269.37-480 288-480h384q18.63 0 36.81 5Q727-470 744-460v-284H216v284Zm0 244h528v-120q0-29.7-21.15-50.85Q701.7-408 672-408H288q-29.7 0-50.85 21.15Q216-365.7 216-336v120Zm0 0h528-528Z" />
  </svg>
);
