import type { SVGProps } from "react";
export const SvgBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-816q70 0 130.92 26.51 60.92 26.5 106.49 72.08 45.58 45.57 72.08 106.49Q816-550 816-480q0 70-26.48 130.92-26.47 60.93-72 106.5Q672-197 610.76-170.5T480.33-144q-38.33 0-75.83-9T332-179l54-54q23 8.5 46.5 12.75T480-216q110 0 187-77t77-187q0-110-77-187t-187-77q-110 0-187 77t-77 187q0 24 5 47.5t13 46.5l-55 54q-19-34-27-72t-8-76.33q0-69.19 26.5-130.43Q197-672 242.58-717.52q45.57-45.53 106.5-72Q410-816 480-816Zm24 456v-93L195-145l-50-51 308-308h-93v-72h216v216h-72Z" />
  </svg>
);
