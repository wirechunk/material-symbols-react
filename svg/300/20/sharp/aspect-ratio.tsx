import type { SVGProps } from "react";
export const SvgAspectRatio = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M562-322h172v-172h-52v120H562v52ZM226-466h52v-120h120v-52H226v172ZM116-212v-536h728v536H116Zm52-52h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
