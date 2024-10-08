import type { SVGProps } from "react";
export const SvgFluid = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M744-48H444v-170q-97-14-162.5-87.5T216-480v-432h528v432q0 101-65.5 174.5T516-218v98h228v72ZM534-432h132q3-11 4.5-23t1.5-25v-72H528v-72h144v-72H480v-72h192v-72H288v312h90q35 0 64.5 18t45.5 50q7 13 19.67 20.5Q520.35-432 534-432Zm-54 144q45.68 0 84.84-19.5Q604-327 630-360h-95.85q-35.15 0-64.65-18-29.5-18-45.5-50-7-13-19.67-20.5Q391.65-456 378-456h-89q9 72 63 120t128 48Zm-56-168Z" />
  </svg>
);
