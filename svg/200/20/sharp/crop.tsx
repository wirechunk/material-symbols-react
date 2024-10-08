import type { SVGProps } from "react";
export const SvgCrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M716-68v-144H212v-504H68v-32h144v-144h32v648h648v32H748v144h-32Zm0-208v-440H276v-32h472v472h-32Z" />
  </svg>
);
