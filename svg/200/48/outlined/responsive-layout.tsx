import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-433.46h207.31V-800H800v640H160Zm433.46-30.77h175.77v-578.46H398.08v175.77h195.38v402.69Zm-195.38 0h164.61v-371.92H398.08v371.92Zm-207.31 0h176.54v-371.92H190.77v371.92Zm402.69-402.69v30.77-30.77Zm-226.15 30.77Zm195.38 0Zm30.77-30.77Z" />
  </svg>
);
