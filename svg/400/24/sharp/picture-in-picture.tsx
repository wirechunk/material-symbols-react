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
    <path d="M80-160v-640h800v640H80Zm80-80h640v-480H160v480Zm280-200h320v-240H440v240Zm80-80v-80h160v80H520ZM160-240v-480 480Z" />
  </svg>
);
