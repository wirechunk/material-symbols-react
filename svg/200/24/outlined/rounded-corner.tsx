import type { SVGProps } from "react";
export const SvgRoundedCorner = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-160v-49.23h49.23V-160H160Zm0-147.69v-49.23h49.23v49.23H160Zm0-147.69v-49.24h49.23v49.24H160Zm0-147.7v-49.23h49.23v49.23H160Zm0-147.69V-800h49.23v49.23H160ZM307.69-160v-49.23h49.23V-160h-49.23Zm0-590.77V-800h49.23v49.23h-49.23ZM455.38-160v-49.23h49.24V-160h-49.24Zm147.7 0v-49.23h49.23V-160h-49.23Zm147.69 0v-49.23H800V-160h-49.23Zm0-147.69v-49.23H800v49.23h-49.23ZM800-455.38h-40v-172.31q0-55.13-38.59-93.72Q682.82-760 627.69-760H455.38v-40h172.31q72.23 0 122.27 50.04Q800-699.92 800-627.69v172.31Z" />
  </svg>
);
