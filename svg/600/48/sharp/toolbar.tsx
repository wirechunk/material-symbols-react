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
    <path d="M105.87-105.87V-854.7H854.7v748.83H105.87Zm79.22-529.96h589.82v-139.08H185.09v139.08Zm589.82 79.79H185.09v370.95h589.82v-370.95Zm-589.82-79.79v79.79-79.79Zm0 0v-139.08 139.08Zm0 79.79v370.95-370.95Z" />
  </svg>
);
