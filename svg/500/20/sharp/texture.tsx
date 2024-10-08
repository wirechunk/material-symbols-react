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
    <path d="M136.35-136.35v-58.89l627.41-628.41h59.65v59.89L195.24-136.35h-58.89Zm-.48-229.35v-118.02l340.41-340.41H594.3L135.87-365.7Zm0-280.19v-178.24h178.24L135.87-645.89Zm519.02 510.02 169.24-169.24v169.24H654.89Zm-289.19 0L824.13-594.3v118.02L483.72-135.87H365.7Z" />
  </svg>
);
