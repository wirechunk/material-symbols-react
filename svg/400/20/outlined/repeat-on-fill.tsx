import type { SVGProps } from "react";
export const SvgRepeatOnFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-48q-30 0-51-21t-21-51v-720q0-30 21-51t51-21h720q30 0 51 21t21 51v720q0 30-21 51t-51 21H120Zm168-48 51-51-57-57h486v-228h-72v156H282l57-57-51-51-144 144L288-96Zm-96-432h72v-156h414l-57 57 51 51 144-144-144-144-51 51 57 57H192v228Z" />
  </svg>
);
