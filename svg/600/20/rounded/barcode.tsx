import type { SVGProps } from "react";
export const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M30.48-181.83V-779.3h75.39v597.47H30.48Zm124.52 0V-779.3h75.39v597.47H155Zm125.09 0V-779.3h49.69v597.47h-49.69Zm124.52 0V-779.3H480v597.47h-75.39Zm125.09 0V-779.3h100.52v597.47H529.7Zm150.21 0V-779.3h49.7v597.47h-49.7Zm149.09 0V-779.3h100.52v597.47H829Z" />
  </svg>
);
