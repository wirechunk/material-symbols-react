import type { SVGProps } from "react";
export const SvgScreenshot = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M500.41-291.59v-48h96v-96h48v144h-144ZM315.59-524.41v-144h144v48h-96v96h-48Zm-48 483.82q-34.49 0-58.74-24.26-24.26-24.25-24.26-58.74v-712.82q0-34.49 24.26-58.74 24.25-24.26 58.74-24.26h424.82q34.49 0 58.74 24.26 24.26 24.25 24.26 58.74v712.82q0 34.49-24.26 58.74-24.25 24.26-58.74 24.26H267.59Zm0-131v48h424.82v-48H267.59Zm0-72h424.82v-472.82H267.59v472.82Zm0-544.82h424.82v-48H267.59v48Zm0 0v-48 48Zm0 616.82v48-48Z" />
  </svg>
);
