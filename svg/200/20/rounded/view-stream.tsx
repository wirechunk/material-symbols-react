import type { SVGProps } from "react";
export const SvgViewStream = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M744-336.62V-464H216v127.38q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92h478.76q10.77 0 17.7-6.92 6.92-6.93 6.92-17.7ZM744-496v-127.38q0-10.77-6.92-17.7-6.93-6.92-17.7-6.92H240.62q-10.77 0-17.7 6.92-6.92 6.93-6.92 17.7V-496h528ZM240.62-280q-24.32 0-40.47-16.15T184-336.62v-286.76q0-24.32 16.15-40.47T240.62-680h478.76q24.32 0 40.47 16.15T776-623.38v286.76q0 24.32-16.15 40.47T719.38-280H240.62Z" />
  </svg>
);
