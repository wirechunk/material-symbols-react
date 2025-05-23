import type { SVGProps } from "react";
export const SvgLightFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-144q-60 0-102-42t-42-102H216q-29.7 0-50.85-21.15Q144-330.3 144-360q0-124 87.5-210.5T444-671v-145h72v145q125 14 212.5 100.5T816-360q0 29.7-21.15 50.85Q773.7-288 744-288H624q0 60-42 102t-102 42ZM216-360h528q0-103-78.5-172T480-601q-107 0-185.5 69T216-360Z" />
  </svg>
);
