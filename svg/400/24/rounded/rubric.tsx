import type { SVGProps } from "react";
export const SvgRubric = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M160-200v-560q0-33 23.5-56.5T240-840h480q33 0 56.5 23.5T800-760v240q0 33-23.5 56.5T720-440H240v80h160q17 0 28.5 11.5T440-320q0 17-11.5 28.5T400-280H240v80h160q17 0 28.5 11.5T440-160q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm456-32 114-114q11-11 28-11t28 11q11 11 11 28t-11 28L644-148q-12 12-28 12t-28-12l-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l28 28ZM240-520h200v-80H240v80Zm280 0h200v-80H520v80ZM240-680h200v-80H240v80Zm280 0h200v-80H520v80Z" />
  </svg>
);
