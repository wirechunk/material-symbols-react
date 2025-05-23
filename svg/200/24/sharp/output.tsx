import type { SVGProps } from "react";
export const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v120h-40v-80H200v560h560v-80h40v120H160Zm508.46-148.46L640.92-336l122.23-124H375.38v-40h387.77L640.92-624l27.54-27.54L840-480 668.46-308.46Z" />
  </svg>
);
