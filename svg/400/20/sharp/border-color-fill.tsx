import type { SVGProps } from "react";
export const SvgBorderColorFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96 0v-192h768V0H96Zm96-288v-153l453-453 153 153-453 453H192Zm453-402 51-51-51-51-51 51 51 51Z" />
  </svg>
);
