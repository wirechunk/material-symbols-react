import type { SVGProps } from "react";
export const SvgDropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M472-472h224v-224H472v224ZM184-184v-592h592v592H184Zm32-32h528v-528H216v528Zm0 0v-528 528Z" />
  </svg>
);
