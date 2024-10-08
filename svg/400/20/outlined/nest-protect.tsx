import type { SVGProps } from "react";
export const SvgNestProtect = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M336-144q-81 0-136.5-55.5T144-336v-288q0-80 55.5-136T336-816h288q80 0 136 56t56 136v288q0 81-56 136.5T624-144H336Zm0-72h288q50 0 85-34.5t35-85.5v-288q0-50-35-85t-85-35H336q-51 0-85.5 35T216-624v288q0 51 34.5 85.5T336-216Zm144-72q-81 0-136.5-55.5T288-480q0-80 55.5-136T480-672q80 0 136 56t56 136q0 81-56 136.5T480-288Zm0-72q50 0 85-34.5t35-85.5q0-50-35-85t-85-35q-51 0-85.5 35T360-480q0 51 34.5 85.5T480-360Z" />
  </svg>
);
