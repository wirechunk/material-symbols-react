import type { SVGProps } from "react";
export const SvgAspectRatioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M580-300h160v-160h-40v120H580v40ZM220-500h40v-120h120v-40H220v160ZM120-200v-560h720v560H120Z" />
  </svg>
);
