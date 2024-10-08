import type { SVGProps } from "react";
export const SvgEject = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M240-240v-72h480v72H240Zm16-144 224-336 224 336H256Zm224-72Zm-90 0h179l-89-134-90 134Z" />
  </svg>
);
