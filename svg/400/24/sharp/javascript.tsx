import type { SVGProps } from "react";
export const SvgJavascript = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-360v-100h60v40h60v-180h60v240H240Zm240 0v-80h60v20h80v-40H480v-140h200v80h-60v-20h-80v40h140v140H480Z" />
  </svg>
);
