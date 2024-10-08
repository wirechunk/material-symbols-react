import type { SVGProps } from "react";
export const SvgStrategy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M230.96-523.48 76.78-613.7V-793l154.18-90.22L385.13-793v179.3l-154.17 90.22Zm0-107.74 61.82-35.35v-72.23l-61.82-36.68-61.83 35.35v73.56l61.83 35.35Zm448.26 139.09V-598.3l156 90V-221L585.04-76.78 334.87-221v-287.3l156-90v106.17L427.22-455v180.7l157.82 90.78 157.83-90.78V-455l-63.65-37.13Zm-140.35 61.26v-452.35h344.91L802-765.04l81.78 118.17H631.22v216h-92.35Zm46.17 93.04ZM230.96-703.35Z" />
  </svg>
);
