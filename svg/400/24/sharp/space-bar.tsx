import type { SVGProps } from "react";
export const SvgSpaceBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-360v-240h80v160h480v-160h80v240H160Z" />
  </svg>
);
