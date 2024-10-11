import type { SVGProps } from "react";
export const SvgGifBox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm240-160h60v-240h-60v240Zm-200 0h160v-120h-60v60h-40v-120h100v-60H240v240Zm320 0h60v-80h80v-60h-80v-40h120v-60H560v240ZM200-200v-560 560Z" />
  </svg>
);
