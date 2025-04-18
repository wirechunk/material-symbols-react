import type { SVGProps } from "react";
export const SvgStackedBarChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M145.87-145.87v-485.26H298.3v485.26H145.87Zm0-515.83v-153H298.3v153H145.87Zm257.91 515.83v-363.56h152.44v363.56H403.78Zm0-394.13v-153h152.44v153H403.78ZM661.7-145.87V-388.3h153v242.43h-153Zm0-273V-571.3h153v152.43h-153Z" />
  </svg>
);
