import type { SVGProps } from "react";
export const SvgViewArrayFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h120v560H120Zm160 0v-560h400v560H280Zm440 0v-560h120v560H720Z" />
  </svg>
);
