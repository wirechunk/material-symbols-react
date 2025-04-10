import type { SVGProps } from "react";
export const SvgEnt = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M391.92-116h53l20.85-230H590v-52H469.85l10.46-107.39h183.23v-52H433.77L391.92-116ZM284-116v-164.23q-57-48-88.5-113.26T164-529.28q0-131.13 92.46-222.93Q348.92-844 481-844q100.54 0 182.92 54.66 82.39 54.65 108.85 141.73L846.23-404H748v192H580v96h-52v-148h168v-192h80l-52-173q-22-72.38-89.88-117.69Q566.23-792 481-792q-111 0-188 76.74t-77 186.64q0 58.83 25 111.78t70 90.88L336-304v188h-52Zm212-338Z" />
  </svg>
);
