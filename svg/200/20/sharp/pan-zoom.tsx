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
    <path d="M184-184v-152h32v96.69l137-137L376.31-353l-137 137H336v32H184Zm423-399.69L583.69-607l137-137H624v-32h152v152h-32v-96.69l-137 137Z" />
  </svg>
);
