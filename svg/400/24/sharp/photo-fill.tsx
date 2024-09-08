import type { SVGProps } from "react";
export const SvgPhotoFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-280h480L570-480 450-320l-90-120-120 160ZM120-120v-720h720v720H120Z" />
  </svg>
);
