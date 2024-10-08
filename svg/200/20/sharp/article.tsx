import type { SVGProps } from "react";
export const SvgArticle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M308-308h248v-32H308v32Zm0-156h344v-32H308v32Zm0-156h344v-32H308v32ZM184-184v-592h592v592H184Zm32-32h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
