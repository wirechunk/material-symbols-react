import type { SVGProps } from "react";
export const SvgPresentToAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M444-336h72v-150l57.12 57.3L624-480 480-624 336-480l51 51 57-57v150ZM96-192v-576h768v576H96Zm72-72h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
