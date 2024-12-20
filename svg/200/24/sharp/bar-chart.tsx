import type { SVGProps } from "react";
export const SvgBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M640-200v-192.31h120V-200H640Zm-220 0v-560h120v560H420Zm-220 0v-367.69h120V-200H200Z" />
  </svg>
);
