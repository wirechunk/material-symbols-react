import type { SVGProps } from "react";
export const SvgTableChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-640h640v640H160Zm40-460h560v-140H200v140Zm0 420h115.38v-380H200v380Zm444.62 0H760v-380H644.62v380Zm-289.24 0h249.24v-380H355.38v380Z" />
  </svg>
);
