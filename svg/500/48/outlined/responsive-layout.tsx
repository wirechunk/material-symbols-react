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
    <path d="M112.59-114.02v-517.2h217.87v-217.63h516.95v734.83H112.59Zm517.19-68.13h149.26v-598.33H398.59v149.26h231.19v449.07Zm-231.19 0h162.82v-380.7H398.59v380.7Zm-217.63 0h149.5v-380.7h-149.5v380.7Zm448.82-449.07v68.37-68.37Zm-299.32 68.37Zm230.95 0Zm68.37-68.37Z" />
  </svg>
);
