import type { SVGProps } from "react";
export const SvgWebAsset = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M120-200v-560h720v560H120Zm30.77-30.77h658.46v-416.77H150.77v416.77Z" />
  </svg>
);
