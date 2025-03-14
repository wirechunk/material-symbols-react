import type { SVGProps } from "react";
export const SvgBlinds = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-140v-60h80v-620h600v620h80v60H100Zm140-525h325v-95H240v95Zm0 155h325v-95H240v95Zm0 310h480v-250h-95v81.46q12.84 8.08 20.27 20.77 7.42 12.69 7.42 27.77 0 23.9-16.91 40.8-16.92 16.89-40.85 16.89t-40.78-16.89q-16.84-16.9-16.84-40.8 0-15.08 7.42-27.77T565-368.54V-450H240v250Zm385-465h95v-95h-95v95Zm0 155h95v-95h-95v95Z" />
  </svg>
);
