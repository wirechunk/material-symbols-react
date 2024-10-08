import type { SVGProps } from "react";
export const SvgEarthquake = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M365-96q-12 0-21.5-7T330-121l-98-323H96v-72h163q12 0 21.5 7t13.5 18l66 217 123-562q2-13 12-20.5t23-7.5q13 0 22.5 8t12.5 20l86 372 56-182q3-11 12.5-18t21.5-7q11-1 20.5 5.5T763-648l49 132h52v72h-77q-11 0-20-6.5T754-468l-22-55-64 208q-4 12-14 19.5t-22 6.5q-12 0-21.5-8T599-317l-80-347-119 540q-2 12-12 19.5T365-96Z" />
  </svg>
);
