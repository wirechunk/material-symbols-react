import type { SVGProps } from "react";
export const SvgMoveGroup = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-168h72v96h480v-408H312v96h-72v-240h624v624H240ZM96-96v-624h72v552h552v72H96Zm420-264-51-51 69-69H240v-72h294l-69-69 51-51 156 156-156 156Z" />
  </svg>
);
