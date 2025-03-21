import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M145.09-145.87q-33.26 0-56.24-22.98-22.98-22.98-22.98-56.24v-509.82q0-33.49 22.98-56.64t56.24-23.15h669.82q33.49 0 56.64 23.15t23.15 56.64v509.82q0 33.26-23.15 56.24-23.15 22.98-56.64 22.98H145.09Zm269.61-79.22h400.21v-509.82H414.7v509.82Zm-79.79 0v-509.82H145.09v509.82h189.82Zm-189.82 0v-509.82 509.82Zm189.82 0h79.79-79.79Zm0-509.82h79.79-79.79Z" />
  </svg>
);
