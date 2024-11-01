import type { SVGProps } from "react";
export const SvgRipples = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M182.15-182.15h595.7v-364.31q-20.76 12.29-44.27 17.93-23.5 5.64-47.58 5.64-68.34 0-116.73-48.38-48.38-48.39-48.38-116.73 0-23.4 5.64-46.24 5.64-22.85 17.93-43.61H182.15v595.7Zm-68.13 68.13v-732.2h732.2v732.2h-732.2Zm68.13-663.83v595.7-595.7Z" />
  </svg>
);
