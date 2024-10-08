import type { SVGProps } from "react";
export const SvgAreaChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-180v-460l144.62 108.46 199.23-279.61L673.08-660H820v480H140Zm182.85-78.69 160-221 291.76 227.54v-362.46H657.08l-163.93-131.7-198 279-109.76-81.92v180.54l137.46 110Z" />
  </svg>
);
