import type { SVGProps } from "react";
export const SvgPictureInPicture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm40-40h640v-480H160v480Zm292.31-212.31H760V-680H452.31v227.69Zm40-40V-640H720v147.69H492.31ZM160-240v-480 480Z" />
  </svg>
);
