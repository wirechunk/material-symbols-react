import type { SVGProps } from "react";
export const SvgVignette = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-332q92.31 0 156.15-43.06Q700-418.12 700-480q0-61.88-63.85-104.94Q572.31-628 480-628t-156.15 43.06Q260-541.88 260-480q0 61.88 63.85 104.94Q387.69-332 480-332Zm0-32q-77.69 0-132.85-33.77Q292-431.54 292-480t55.15-82.23Q402.31-596 480-596t132.85 33.77Q668-528.46 668-480t-55.15 82.23Q557.69-364 480-364ZM136-232v-496h688v496H136Zm32-32h624v-432H168v432Zm0 0v-432 432Z" />
  </svg>
);
