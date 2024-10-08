import type { SVGProps } from "react";
export const SvgPlaceItem = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M176.61-100.78q-33.26 0-56.24-22.98Q97.39-146.74 97.39-180v-436.61q0-33.49 22.98-56.64 22.98-23.14 56.24-23.14h203.78v79.78H176.61V-180h606.78v-436.61H579.61v-79.78h203.78q33.49 0 56.64 23.14 23.15 23.15 23.15 56.64V-180q0 33.26-23.15 56.24-23.15 22.98-56.64 22.98H176.61ZM480-299.82 294.82-485l56.57-56.57 89 89.57v-508h79.22v508l89-89.57L665.18-485 480-299.82Z" />
  </svg>
);
