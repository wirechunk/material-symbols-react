import type { SVGProps } from "react";
export const SvgPanZoom = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M124.78-124.78v-227.05h98v59.96l104-104 69.09 69.09-104 104h59.96v98H124.78Zm508.44-439.35-69.09-69.09 104-104h-59.96v-98h227.05v227.05h-98v-59.96l-104 104Z" />
  </svg>
);
