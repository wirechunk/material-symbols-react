import type { SVGProps } from "react";
export const SvgStrategy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m250-531.08-134-78.23v-156.46L250-844l134 78.23v156.46l-134 78.23Zm0-60.92 82-46.77v-96.2l-82-48.11-82 46.77v97.54L250-592Zm405.38 58.08v-59.54L796-512.69v264.46L566-116 336-248.23v-264.46l140.61-80.77v59.54L388-482.23v203.58l178 102.73 178-102.73v-203.58l-88.62-51.69ZM540-432v-412h304l-68.08 98L844-648H592v216h-52Zm26 77.08ZM250-687.54Z" />
  </svg>
);
