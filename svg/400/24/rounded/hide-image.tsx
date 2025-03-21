import type { SVGProps } from "react";
export const SvgHideImage = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M840-760v440q0 20-12.5 30T800-280q-15 0-27.5-10.5T760-321v-439H320q-20 0-30-12.5T280-800q0-15 10-27.5t30-12.5h440q33 0 56.5 23.5T840-760ZM200-120q-33 0-56.5-23.5T120-200v-528l-36-36q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11l-36-36H200Zm367-160H280q-12 0-18-11t2-21l80-107q6-8 16-8t16 8l74 99 33-44-283-283v447h447l-80-80Zm-30-257ZM424-424Z" />
  </svg>
);
