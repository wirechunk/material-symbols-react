import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M317.37-37.37v-60h325.26v60H317.37Zm-31.87-120q-27.6 0-47.86-20.27-20.27-20.26-20.27-47.86v-629q0-27.6 20.27-47.86 20.26-20.27 47.86-20.27h389q27.6 0 47.86 20.27 20.27 20.26 20.27 47.86v629q0 27.6-20.27 47.86-20.26 20.27-47.86 20.27h-389Zm0-128.13v60h389v-60h-389Zm0-60h389v-389h-389v389Zm0-449h389v-60h-389v60Zm0 0v-60 60Zm0 509v60-60Z" />
  </svg>
);
