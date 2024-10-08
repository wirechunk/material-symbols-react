import type { SVGProps } from "react";
export const SvgHide = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m217-167-50-50 143-143h-94v-72h216v216h-72v-94L217-167Zm311-361v-216h72v94l143-143 50 50-143 143h94v72H528Z" />
  </svg>
);
