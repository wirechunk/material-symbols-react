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
    <path d="M136-232v-496h688v496H136Zm208-32h448v-432H344v432Zm-32 0v-432H168v432h144Zm-144 0v-432 432Zm144 0h32-32Zm0-432h32-32Z" />
  </svg>
);
