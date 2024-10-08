import type { SVGProps } from "react";
export const SvgStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m168-175-30-14q-28-12-38-40t3-56l65-140v250Zm148 79q-31 0-53.5-20.5T240-168v-288L374-96h-58Zm207-5q-28 11-55-1.5T430-144L259-613q-11-28 2-55t41-37l294-107q28-11 54.5 2t37.5 41l172 471q11 29-2 55.5T816-205L523-101Zm-79-451q15 0 25.5-10.5T480-588q0-15-10.5-25.5T444-624q-15 0-25.5 10.5T408-588q0 15 10.5 25.5T444-552Zm54 384 294-105-171-471-294 107 171 469ZM327-637l294-107-294 107Z" />
  </svg>
);
