import type { SVGProps } from "react";
export const SvgLabPanel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M60-140v-320h80v-173.38h-40v-165.85h320v165.85h-40V-460h200v-173.38h-40v-165.85h320v165.85h-40V-460h80v320H60Zm525.39-537.69h229.22v-76.15H585.39v76.15Zm-440 0h229.22v-76.15H145.39v76.15Zm480 217.69h149.22v-172.31H625.39V-460Zm-440 0h149.22v-172.31H185.39V-460Zm-67.7 274.61h724.62q5.38 0 8.84-3.46t3.46-8.84v-204.62q0-5.38-3.46-8.84t-8.84-3.46H117.69q-5.38 0-8.84 3.46t-3.46 8.84v204.62q0 5.38 3.46 8.84t8.84 3.46Zm27.7-492.3v-76.15 76.15Zm440 0v-76.15 76.15Zm-480 492.3V-414.61-185.39Z" />
  </svg>
);
