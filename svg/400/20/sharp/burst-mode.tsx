import type { SVGProps } from "react";
export const SvgBurstMode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-192v-576h72v576H48Zm144 0v-576h72v576h-72Zm144 0v-576h576v576H336Zm72-72h432v-432H408v432Zm48-72h336L683-480l-83 108-59-78-85 114Zm-48 72v-432 432Z" />
  </svg>
);
