import type { SVGProps } from "react";
export const SvgWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M185.09-105.87q-33.26 0-56.24-22.98-22.98-22.98-22.98-56.24v-589.82q0-33.49 22.98-56.64t56.24-23.15h589.82q33.49 0 56.64 23.15t23.15 56.64v589.82q0 33.26-23.15 56.24-23.15 22.98-56.64 22.98H185.09ZM510-450v264.91h264.91V-450H510Zm0-60h264.91v-264.91H510V-510Zm-60 0v-264.91H185.09V-510H450Zm0 60H185.09v264.91H450V-450Z" />
  </svg>
);
