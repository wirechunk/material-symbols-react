import type { SVGProps } from "react";
export const SvgSpaceBarFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-400v-200h40v160h480v-160h40v200H200Z" />
  </svg>
);
