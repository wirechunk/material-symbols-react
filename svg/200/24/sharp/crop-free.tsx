import type { SVGProps } from "react";
export const SvgCropFree = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-200h40v160h160v40H160Zm440 0v-40h160v-160h40v200H600ZM160-600v-200h200v40H200v160h-40Zm600 0v-160H600v-40h200v200h-40Z" />
  </svg>
);
