import type { SVGProps } from "react";
export const SvgTransitionSlide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M72-192v-576h240v576H72Zm72-72h96v-432h-96v432Zm240 72v-576h504v576H384Zm72-72h360v-432H456v432Zm-216 0v-432 432Zm216 0v-432 432Z" />
  </svg>
);
