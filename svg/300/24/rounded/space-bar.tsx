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
    <path d="M180-380v-220h60v160h480v-160h60v220H180Z" />
  </svg>
);
