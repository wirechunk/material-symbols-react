import type { SVGProps } from "react";
export const SvgMouseLock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M576-96v-192h48v-48q0-29.7 21.21-50.85 21.21-21.15 51-21.15T747-386.85q21 21.15 21 50.85v48h48v192H576Zm84-192h72v-48q0-15.3-10.29-25.65Q711.42-372 696.21-372t-25.71 10.35Q660-351.3 660-336v48ZM480-528Zm0 432q-120 0-204-84t-84-204v-192q0-120 84-204t204-84q120 0 204 84t84 204v110q-17-7-35-10.5t-37-3.5v-48H264v144q0 89.64 63.18 152.82Q390.36-168 480-168h12q6 0 12-1v72q-6.21.67-12.1.83Q486-96 480-96ZM266-600h178v-188q-72 11-121 63.5T266-600Zm250 0h178q-8-72-57-124t-121-64v188Zm-36 72Zm36-72Zm-72 0Z" />
  </svg>
);
