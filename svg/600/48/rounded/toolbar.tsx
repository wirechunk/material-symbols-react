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
    <path d="M185.09-105.87q-32.51 0-55.87-23.35-23.35-23.36-23.35-55.87v-589.82q0-32.74 23.35-56.26 23.36-23.53 55.87-23.53h589.82q32.74 0 56.26 23.53 23.53 23.52 23.53 56.26v589.82q0 32.51-23.53 55.87-23.52 23.35-56.26 23.35H185.09Zm0-529.96h589.82v-139.08H185.09v139.08Zm589.82 79.79H185.09v370.95h589.82v-370.95Zm-589.82-79.79v79.79-79.79Zm0 0v-139.08 139.08Zm0 79.79v370.95-370.95Z" />
  </svg>
);
