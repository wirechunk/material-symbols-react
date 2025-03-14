import type { SVGProps } from "react";
export const SvgThumbnailBar = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192.62-232q-23.55 0-40.09-16.55Q136-265.09 136-288.66v-383.01q0-23.56 16.53-39.95Q169.07-728 192.62-728h574.76q23.55 0 40.09 16.55Q824-694.91 824-671.34v383.01q0 23.56-16.53 39.95Q790.93-232 767.38-232H192.62ZM344-264h423.38q10.77 0 17.7-6.92 6.92-6.93 6.92-17.7v-382.76q0-10.77-6.92-17.7-6.93-6.92-17.7-6.92H344v432Zm-32 0v-432H192.62q-10.77 0-17.7 6.92-6.92 6.93-6.92 17.7v382.76q0 10.77 6.92 17.7 6.93 6.92 17.7 6.92H312Zm-144 0v-432 432Zm144 0h32-32Zm0-432h32-32Z" />
  </svg>
);
