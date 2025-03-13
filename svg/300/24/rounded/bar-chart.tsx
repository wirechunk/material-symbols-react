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
    <path d="M640-180v-236.15h140V-180H640Zm-230 0v-600h140v600H410Zm-230 0v-403.84h140V-180H180Z" />
  </svg>
);
