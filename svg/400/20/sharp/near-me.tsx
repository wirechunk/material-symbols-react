import type { SVGProps } from "react";
export const SvgNearMe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M517-144 416-416 144-517v-35l672-264-264 672h-35Zm19-156 152-388-388 152 171 65 65 171Zm-65-171Z" />
  </svg>
);
