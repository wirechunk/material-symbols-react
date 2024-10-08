import type { SVGProps } from "react";
export const SvgToolbar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-680h680v680H140Zm45.39-494.92h589.22v-139.69H185.39v139.69Zm589.22 45.38H185.39v404.15h589.22v-404.15Zm-589.22-45.38v45.38-45.38Zm0 0v-139.69 139.69Zm0 45.38v404.15-404.15Z" />
  </svg>
);
