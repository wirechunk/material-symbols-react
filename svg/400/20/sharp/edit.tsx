import type { SVGProps } from "react";
export const SvgEdit = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-216h51l375-375-51-51-375 375v51Zm-72 72v-153l549-549 153 153-549 549H144Zm600-549-51-51 51 51Zm-127.95 76.95L591-642l51 51-25.95-25.05Z" />
  </svg>
);
