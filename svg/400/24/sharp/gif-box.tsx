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
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm100-200h120v-80h-40v40h-40v-80h80v-40H300v160Zm160 0h40v-160h-40v160Zm80 0h40v-60h60v-40h-60v-20h80v-40H540v160Z" />
  </svg>
);
