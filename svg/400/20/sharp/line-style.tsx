import type { SVGProps } from "react";
export const SvgLineStyle = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-192v-72h72v72h-72Zm0-144v-72h168v72H144Zm0-144v-72h300v72H144Zm0-144v-144h672v144H144Zm150 432v-72h72v72h-72Zm102-144v-72h168v72H396Zm48 144v-72h72v72h-72Zm72-288v-72h300v72H516Zm78 288v-72h72v72h-72Zm54-144v-72h168v72H648Zm96 144v-72h72v72h-72Z" />
  </svg>
);
