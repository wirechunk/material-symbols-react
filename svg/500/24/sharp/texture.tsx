import type { SVGProps } from "react";
export const SvgTexture = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M115.35-115.35v-63.89l665.41-665.41h64.65v63.89L179.24-115.35h-63.89Zm-3.48-241.35v-128.02l363.41-363.41H603.3L111.87-356.7Zm0-309.19v-182.24h182.24L111.87-665.89Zm554.02 554.02 182.24-182.24v182.24H665.89Zm-309.19 0L848.13-603.3v128.02L484.72-111.87H356.7Z" />
  </svg>
);
