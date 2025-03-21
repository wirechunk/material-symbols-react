import type { SVGProps } from "react";
export const SvgJumpToElement = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M432-432v-144h72v72h72v72H432Zm288 0v-72h72v-72h72v144H720ZM432-720v-144h144v72h-72v72h-72Zm360 0v-72h-72v-72h144v144h-72ZM147-96l-51-51 213-213H144v-72h288v288h-72v-165L147-96Z" />
  </svg>
);
