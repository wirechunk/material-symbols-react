import type { SVGProps } from "react";
export const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M641.22-643.22v-94H318.78v94h-98v-192h518.44v192h-98Zm-466.44 98h611.44-611.44Zm520.57 113.53q18.61 0 31.65-12.73t13.04-31.54q0-18.6-12.72-31.93-12.73-13.33-31.54-13.33-18.61 0-31.93 13.12-13.33 13.11-13.33 31.72 0 18.6 13.12 31.64 13.11 13.05 31.71 13.05Zm-54.13 222.47v-100.47H318.78v100.47h322.44Zm98 94.05H220.78v-157h-144v-371.05h806.44v371.05h-144v157Zm47-255v-175.05H174.78v175.05h46v-37.52h518.44v37.52h47Z" />
  </svg>
);
