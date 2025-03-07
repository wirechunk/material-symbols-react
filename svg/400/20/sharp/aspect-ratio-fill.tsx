import type { SVGProps } from "react";
export const SvgAspectRatioFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M552-312h192v-192h-72v120H552v72ZM216-456h72v-120h120v-72H216v192ZM96-192v-576h768v576H96Z" />
  </svg>
);
