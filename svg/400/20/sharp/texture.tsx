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
    <path d="M144-144v-51l620-621h52v52L195-144h-51Zm0-237v-102l333-333h102L144-381Zm0-279v-156h156L144-660Zm525 516 147-147v147H669Zm-288 0 435-435v102L483-144H381Z" />
  </svg>
);
