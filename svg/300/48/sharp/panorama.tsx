import type { SVGProps } from "react";
export const SvgPanorama = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M100-180v-600h760v600H100Zm45.39-45.39h669.22v-509.22H145.39v509.22ZM267.77-320h428.15L566.61-494.77 446.38-338.46l-81.61-108.61-97 127.07Zm-122.38 94.61v-509.22 509.22Z" />
  </svg>
);
