import type { SVGProps } from "react";
export const SvgDock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M332.41-44.41v-72h295.18v72H332.41Zm-13-144q-34.48 0-58.74-24.26-24.26-24.26-24.26-58.74v-561.18q0-34.48 24.26-58.74 24.26-24.26 58.74-24.26h321.18q34.48 0 58.74 24.26 24.26 24.26 24.26 58.74v561.18q0 34.48-24.26 58.74-24.26 24.26-58.74 24.26H319.41Zm0-131v48h321.18v-48H319.41Zm0-72h321.18v-321.18H319.41v321.18Zm0-393.18h321.18v-48H319.41v48Zm0 0v-48 48Zm0 465.18v48-48Z" />
  </svg>
);
