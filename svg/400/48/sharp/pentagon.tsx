import type { SVGProps } from "react";
export const SvgPentagon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M283.6-180H676l133-397-329-229-329 229 132.6 397ZM240-120 80-600l400-280 400 280-160 480H240Zm240-373Z" />
  </svg>
);
