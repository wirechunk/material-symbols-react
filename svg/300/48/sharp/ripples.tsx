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
    <path d="M185.39-185.39h589.22v-374.84q-20.13 13-43.09 19.38-22.96 6.39-47.06 6.39-62.59 0-107.1-44.29-44.51-44.28-44.51-106.94 0-23.63 6.38-46.12 6.39-22.5 19.39-42.8H185.39v589.22ZM140-140v-680h680v680H140Zm45.39-634.61v589.22-589.22Z" />
  </svg>
);
