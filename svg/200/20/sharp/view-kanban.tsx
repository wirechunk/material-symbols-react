import type { SVGProps } from "react";
export const SvgViewKanban = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M308-308h32v-344h-32v344Zm156-192h32v-152h-32v152Zm156 96h32v-248h-32v248ZM184-184v-592h592v592H184Zm32-32h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
