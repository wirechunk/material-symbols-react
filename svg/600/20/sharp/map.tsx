import type { SVGProps } from "react";
export const SvgMap = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m600-124.22-240-72-235.22 81.05v-642.96L360-835.78l240 72 235.22-81.05v642.96L600-124.22Zm-36-113.69v-434.18l-168-50v434.18l168 50Zm72-2 101.22-33.18v-432.74L636-672.09v432.18Zm-413.22-14.26L324-287.91v-432.18l-101.22 33.18v432.74ZM636-672.09v432.18-432.18Zm-312-48v432.18-432.18Z" />
  </svg>
);
