import type { SVGProps } from "react";
export const SvgBarcode = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M48-192v-576h72v576H48Zm120 0v-576h72v576h-72Zm120 0v-576h48v576h-48Zm120 0v-576h72v576h-72Zm120 0v-576h96v576h-96Zm144 0v-576h48v576h-48Zm144 0v-576h96v576h-96Z" />
  </svg>
);
