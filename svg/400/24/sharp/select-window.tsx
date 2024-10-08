import type { SVGProps } from "react";
export const SvgSelectWindow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-80v-520h160v-280h640v520H720v280H80Zm80-80h480v-280H160v280Zm560-280h80v-280H320v120h400v160Z" />
  </svg>
);
