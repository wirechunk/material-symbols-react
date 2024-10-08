import type { SVGProps } from "react";
export const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="m206.78-646.22-97.87-95.87L183-818.18l97.87 97.87-74.09 74.09ZM427-768.48V-906h106v137.52H427Zm328.22 122.26-75.52-74.09 97.3-97 74.09 75.22-95.87 95.87ZM334-47.22v-215.26l-120-120v-229.39h532v229.39l-120 120v215.26H334Zm106-106h80v-153.56l120-120v-86.44H320v86.44l120 120v153.56Zm40-180Z" />
  </svg>
);
