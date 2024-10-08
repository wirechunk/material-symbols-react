import type { SVGProps } from "react";
export const SvgPhotoFrameFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M200-120v-80H40v-600h880v600H760v80H200Zm0-240h560L580-600 440-420 340-540 200-360Z" />
  </svg>
);
