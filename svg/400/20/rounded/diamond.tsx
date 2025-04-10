import type { SVGProps } from "react";
export const SvgDiamond = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-180q-15 0-29-6.5T426-205L126-543q-9-10-14-22.5t-5-25.5q0-7 2-13t4-13l61-154q8-20 26.5-32.5T241-816h478q22 0 40.5 12.5T786-771l61 154q2 7 4 13t2 13q0 13-5 25.5T834-543L534-205q-11 12-25 18.5t-29 6.5Zm-86-432h172l-66-132h-40l-66 132Zm50 319v-247H224l220 247Zm72 0 220-247H516v247Zm130-319h126l-52-132H580l66 132Zm-458 0h126l66-132H241l-53 132Z" />
  </svg>
);
