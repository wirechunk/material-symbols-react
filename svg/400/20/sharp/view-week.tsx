import type { SVGProps } from "react";
export const SvgViewWeek = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-264h160v-432H168v432Zm232 0h160v-432H400v432Zm232 0h160v-432H632v432Zm232 72H96v-576h768v576Z" />
  </svg>
);
