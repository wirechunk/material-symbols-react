import type { SVGProps } from "react";
export const SvgExplicit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M380-308h200v-32H412v-124h168v-32H412v-124h168v-32H380v344ZM184-184v-592h592v592H184Zm32-32h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
