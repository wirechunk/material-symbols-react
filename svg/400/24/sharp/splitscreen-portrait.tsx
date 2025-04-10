import type { SVGProps } from "react";
export const SvgSplitscreenPortrait = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-240h320v-200H320v200Zm0-280h320v-200H320v200ZM160-80v-800h640v800H160Zm80-80h480v-640H240v640Zm480-640H240h480Z" />
  </svg>
);
