import type { SVGProps } from "react";
export const SvgWaterfallChart = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M144-192v-204h96v204h-96Zm192-204v-180h96v180h-96Zm192-192v-180h96v180h-96Zm192 396v-576h96v576h-96Z" />
  </svg>
);
