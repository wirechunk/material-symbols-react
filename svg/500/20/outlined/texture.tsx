import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M195.96-135.87q-22.35-5.96-38.24-21.85t-21.85-38.24l628.17-628.17q21.11 6.72 37.24 22.73 16.13 16.01 22.61 37.36L195.96-135.87ZM135.87-365.7v-116.34l342.09-342.09H594.3L135.87-365.7Zm0-299.19v-76.24q0-34.78 24.11-58.89t58.89-24.11h76.24L135.87-664.89Zm519.02 529.02 169.24-169.24v86.24q0 34.78-24.11 58.89t-58.89 24.11h-86.24Zm-289.19 0L824.13-594.3v116.34L482.04-135.87H365.7Z" />
  </svg>
);
