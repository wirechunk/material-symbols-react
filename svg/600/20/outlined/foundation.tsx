import type { SVGProps } from "react";
export const SvgFoundation = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M202.43-124.78v-122.83h-96v-98h96v-151.82l-77.82 60.65-59.26-78.92L480-835.78 895.22-515.7l-59.26 78.92L757.57-498v152.39h96.56v98h-96.56v122.83h-98.01v-122.83H528.44v122.83H431v-122.83H300.44v122.83h-98.01Zm98.01-220.83H431v-329.21L300.44-573.91v228.3Zm228 0h131.12v-228.3L528.44-675.39v329.78Z" />
  </svg>
);
