import type { SVGProps } from "react";
export const SvgPrint = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M648-599.38v-120H312v120h-32v-152.01h400v152.01h-32Zm-456.92 32h578.84-578.84Zm501.32 96q15.22 0 25.72-10.29 10.5-10.29 10.5-25.5t-10.29-25.71q-10.29-10.5-25.5-10.5t-25.71 10.28q-10.5 10.29-10.5 25.5 0 15.22 10.28 25.72 10.29 10.5 25.5 10.5ZM648-216v-165.54H312V-216h336Zm32 32H280v-144H159.08v-271.38h641.84V-328H680v144Zm89.92-176v-207.38H191.08V-360H280v-53.54h400V-360h89.92Z" />
  </svg>
);
