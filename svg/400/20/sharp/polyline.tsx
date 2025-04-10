import type { SVGProps } from "react";
export const SvgPolyline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M600-96v-86L317-336H144v-216h152l112-132v-180h216v216H472L360-516v121l240 131v-48h216v216H600ZM480-720h72v-72h-72v72ZM216-408h72v-72h-72v72Zm456 240h72v-72h-72v72ZM516-755ZM252-444Zm455 240Z" />
  </svg>
);
