import type { SVGProps } from "react";
export const SvgBookmark = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-180v-620h480v620L480-283.33 240-180Zm40-62 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
  </svg>
);
