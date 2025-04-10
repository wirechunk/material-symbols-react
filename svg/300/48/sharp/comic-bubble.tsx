import type { SVGProps } from "react";
export const SvgComicBubble = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m440-823.31-88.96 88.96H225.65v125.39L136.69-520l88.96 88.96v125.39h125.39L440-216.69l102.85-102.85 198.84 101.23-102.23-197.84L743.31-520l-88.96-88.96v-125.39H528.96L440-823.31Zm0-64.23 107.66 107.67h152.21v152.21L807.54-520 695.38-407.85l117.46 229.92-30.77 30.77-229.92-117.46L440-152.46 332.34-260.13H180.13v-152.21L72.46-520l107.67-107.66v-152.21h152.21L440-887.54Zm.62 369.16Z" />
  </svg>
);
