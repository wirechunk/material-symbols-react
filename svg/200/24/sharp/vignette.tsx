import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-340q90.31 0 155.15-41.56Q700-423.12 700-480q0-56.88-64.85-98.44Q570.31-620 480-620t-155.15 41.56Q260-536.88 260-480q0 56.88 64.85 98.44Q389.69-340 480-340Zm0-40q-72.69 0-126.35-29.77Q300-439.54 300-480q0-40.46 53.65-70.23Q407.31-580 480-580t126.35 29.77Q660-520.46 660-480q0 40.46-53.65 70.23Q552.69-380 480-380ZM120-200v-560h720v560H120Zm40-40h640v-480H160v480Zm0 0v-480 480Z" />
  </svg>
);
