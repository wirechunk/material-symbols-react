import type { SVGProps } from "react";
export const SvgStylus = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M188.2-138.02q-23.35 4.72-39-11.56-15.66-16.27-11.18-39.62l37.24-179.91 192.85 193.85-179.91 37.24Zm179.91-37.24L175.26-369.11l429.76-428.76q24.35-24.35 58.15-24.35 33.81 0 58.16 24.35l76.54 75.54q24.35 24.35 24.35 58.66 0 34.3-24.35 58.65L368.11-175.26Zm294.56-563.72L277.7-353l75.3 75.3 385.98-384.97-76.31-76.31Z" />
  </svg>
);
