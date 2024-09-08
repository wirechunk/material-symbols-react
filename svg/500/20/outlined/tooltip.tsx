import type { SVGProps } from "react";
export const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-87.87-99.59-148.54H170.87q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-469.72q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h618.26q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v469.72q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H579.35L480-87.87Zm0-149.37 55.85-81.93h253.52v-470.2H170.63v470.2h253.52L480-237.24Zm0-317.15Z" />
  </svg>
);
