import type { SVGProps } from "react";
export const SvgDataset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm0 0v-560 560Zm80-320h160v-160H280v160Zm240 0h160v-160H520v160ZM280-280h160v-160H280v160Zm240 0h160v-160H520v160Z" />
  </svg>
);
