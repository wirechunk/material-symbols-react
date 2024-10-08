import type { SVGProps } from "react";
export const SvgDeck = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M440.41-92.41V-576h-359L480-876.44 878.59-576h-359v483.59h-79.18Zm39.59-563h161.3-322.6H480Zm-350.59 563v-167.11L93.7-426.87l77.17-17.43 29 140.71h156.54v211.18H277v-132h-68.41v132h-79.18Zm474.18 0v-211.18h155.54l30-140.71 77.17 17.43-35.71 167.35v167.11h-79.18v-132H683v132h-79.41Zm-284.89-563h322.6L480-777.35 318.7-655.41Z" />
  </svg>
);
