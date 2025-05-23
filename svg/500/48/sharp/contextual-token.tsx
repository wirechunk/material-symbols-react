import type { SVGProps } from "react";
export const SvgContextualToken = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M242.57-323.57h269.34v-105.34H242.57v105.34Zm369.76 0h105.1v-311.86h-105.1v311.86ZM242.57-530.33h269.34v-105.1H242.57v105.1ZM142.15-222.15h675.7v-515.7h-675.7v515.7Zm-68.13 68.13v-652.2h812.2v652.2H74.02Zm68.13-68.13v-515.7 515.7Z" />
  </svg>
);
