import type { SVGProps } from "react";
export const SvgMagnifyDocked = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-192v-576h768v576H96Zm72-120v48h624v-48H168Zm0-72h624v-312H168v312Zm396-36h72v-84h84v-72h-84v-84h-72v84h-84v72h84v84ZM168-312v48-48Z" />
  </svg>
);
