import type { SVGProps } from "react";
export const SvgScreenshotFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M504-288v-48h96v-96h48v144H504ZM312-528v-144h144v48h-96v96h-48ZM192-48v-864h576v864H192Zm72-192h432v-480H264v480Z" />
  </svg>
);
