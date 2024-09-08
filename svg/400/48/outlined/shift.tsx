import type { SVGProps } from "react";
export const SvgShift = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-120v-310H120l360-450 360 450H640v310H320Zm60-60h200v-310h133L480-786 247-490h133v310Zm100-310Z" />
  </svg>
);
