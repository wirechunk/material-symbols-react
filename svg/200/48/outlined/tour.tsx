import type { SVGProps } from "react";
export const SvgTour = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M220-100v-760h30.77v81.69h560l-72.54 176.85 72.54 176.84h-560V-100H220Zm30.77-647.54v292.16-292.16Zm250.06 202.69q23.25 0 39.63-16.41 16.39-16.41 16.39-40.41 0-24-16.42-40.21-16.41-16.2-40.41-16.2-22.87 0-39.25 16.42-16.39 16.41-16.39 40.41 0 24 16.6 40.2 16.6 16.2 39.85 16.2Zm-250.06 89.47h514.08L706-601.46l58.85-146.08H250.77v292.16Z" />
  </svg>
);
