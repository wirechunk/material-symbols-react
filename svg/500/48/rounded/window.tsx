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
    <path d="M182.15-114.02q-28.35 0-48.24-19.89t-19.89-48.24v-595.7q0-28.45 19.89-48.41 19.89-19.96 48.24-19.96h595.7q28.45 0 48.41 19.96 19.96 19.96 19.96 48.41v595.7q0 28.35-19.96 48.24t-48.41 19.89h-595.7ZM510-450v267.85h267.85V-450H510Zm0-60h267.85v-267.85H510V-510Zm-60 0v-267.85H182.15V-510H450Zm0 60H182.15v267.85H450V-450Z" />
  </svg>
);
