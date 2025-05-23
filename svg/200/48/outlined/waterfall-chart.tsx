import type { SVGProps } from "react";
export const SvgWaterfallChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-200v-181.92h68.92V-200H160Zm190.08-226.46v-145h68.69v145h-68.69Zm190.61-190.31V-760h68.69v143.23h-68.69ZM731.31-200v-560H800v560h-68.69Z" />
  </svg>
);
