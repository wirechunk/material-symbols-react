import type { SVGProps } from "react";
export const SvgWindowFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M510-450h310v310H510v-310Zm0-60v-310h310v310H510Zm-60 0H140v-310h310v310Zm0 60v310H140v-310h310Z" />
  </svg>
);
