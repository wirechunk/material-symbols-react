import type { SVGProps } from "react";
export const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v115.38h-30.77v-84.61H190.77v578.46h578.46v-84.61H800V-160H160Zm514.77-154.77L653.54-336l126.84-128.62h-405v-30.76h405L653.54-624l21.23-21.23L840-480 674.77-314.77Z" />
  </svg>
);
