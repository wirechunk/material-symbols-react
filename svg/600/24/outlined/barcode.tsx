import type { SVGProps } from "react";
export const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M22.48-189.83V-771.3h83.39v581.47H22.48Zm124.52 0V-771.3h83.39v581.47H147Zm125.09 0V-771.3h41.69v581.47h-41.69Zm124.52 0V-771.3H480v581.47h-83.39Zm125.09 0V-771.3h124.52v581.47H521.7Zm166.21 0V-771.3h41.7v581.47h-41.7Zm125.09 0V-771.3h124.52v581.47H813Z" />
  </svg>
);
