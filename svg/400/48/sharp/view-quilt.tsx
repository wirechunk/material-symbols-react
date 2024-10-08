import type { SVGProps } from "react";
export const SvgViewQuilt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm270-310h390v-190H390v190Zm229 250h161v-190H619v190Zm-229 0h162v-190H390v190Zm-210 0h150v-440H180v440Z" />
  </svg>
);
