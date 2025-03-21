import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M195-144q-19-5-32.5-18.5T144-195l621-621q18 6 31.5 19.5T816-765L195-144Zm-51-237v-102l333-333h102L144-381Zm0-298v-65q0-30 21-51t51-21h65L144-679Zm525 535 147-147v75q0 30-21 51t-51 21h-75Zm-288 0 435-435v102L483-144H381Z" />
  </svg>
);
