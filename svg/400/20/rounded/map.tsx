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
    <path d="m578-151-218-65-169 56q-9 3-17 1.5t-15-6.5q-7-5-11-12.5t-4-16.5v-515q0-16 9.5-28.5T177-755l161-54q5-2 11-2.5t11-.5q5 0 11 .5t11 2.5l218 65 169-56q9-3 17-1.5t15 6.5q7 5 11 12.5t4 16.5v515q0 16-9 29t-24 17l-161 54q-5 2-11 2.5t-11 .5q-5 0-11-.5t-11-2.5Zm-14-79v-450l-168-50v450l168 50Zm72-2 108-36v-448l-108 36v448Zm-420-12 108-36v-448l-108 36v448Zm420-436v448-448Zm-312-48v448-448Z" />
  </svg>
);
