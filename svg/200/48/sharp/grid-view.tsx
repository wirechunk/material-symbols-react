import type { SVGProps } from "react";
export const SvgGridView = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-515.38V-800h284.62v284.62H160ZM160-160v-284.62h284.62V-160H160Zm355.38-355.38V-800H800v284.62H515.38Zm0 355.38v-284.62H800V-160H515.38ZM190.77-546.15h223.08v-223.08H190.77v223.08Zm355.38 0h223.08v-223.08H546.15v223.08Zm0 355.38h223.08v-223.08H546.15v223.08Zm-355.38 0h223.08v-223.08H190.77v223.08Zm355.38-355.38Zm0 132.3Zm-132.3 0Zm0-132.3Z" />
  </svg>
);
