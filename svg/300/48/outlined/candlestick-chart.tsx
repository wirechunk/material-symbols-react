import type { SVGProps } from "react";
export const SvgCandlestickChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M300-180v-87.31h-80v-425.38h80V-780h45.39v87.31h80v425.38h-80V-180H300Zm-34.61-132.69H380v-334.62H265.39v334.62ZM614.61-180v-199.62h-80v-236.92h80V-780H660v163.46h80v236.92h-80V-180h-45.39ZM580-425h114.61v-146.15H580V-425Zm-257.31-55Zm314.62-18.08Z" />
  </svg>
);
