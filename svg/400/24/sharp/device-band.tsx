import type { SVGProps } from "react";
export const SvgDeviceBand = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M320-80v-520h-40v-120h40v-160h320v160h40v120h-40v520H320Zm80-540v460h160v-460H400Zm0-80h160v-100H400v100Zm0 80h160-160Zm0-80h160-160Z" />
  </svg>
);
