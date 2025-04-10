import type { SVGProps } from "react";
export const SvgFitPageWidth = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-360v-240L240-480l120 120Zm360-120L600-600v240l120-120ZM96-192v-576h768v576H96Zm696-504H168v432h624v-432Zm-624 0v432-432Z" />
  </svg>
);
