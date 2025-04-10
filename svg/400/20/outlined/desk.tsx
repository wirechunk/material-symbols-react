import type { SVGProps } from "react";
export const SvgDesk = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-240v-480h768v480h-72v-72H648v72h-72v-408H168v408H96Zm552-312h144v-96H648v96Zm0 168h144v-96H648v96Z" />
  </svg>
);
