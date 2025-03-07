import type { SVGProps } from "react";
export const SvgWebFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm40-40h440v-155.38H160V-240Zm480 0h160v-350.77H640V-240ZM160-435.38h440v-155.39H160v155.39Z" />
  </svg>
);
