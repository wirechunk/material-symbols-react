import type { SVGProps } from "react";
export const SvgHighlight = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m210.87-659.52-94.05-93.05 56.57-56.56 93.04 94.04-55.56 55.57Zm229.52-106.7v-133.56h79.22v133.56h-79.22Zm309.31 108.7-56.57-56.57 94.48-94.17 55.57 56.69-93.48 94.05ZM340.78-55.69V-267l-120-120v-222.04h519V-387l-120 120v211.31h-279ZM420-134.91h120v-165.57l120-120v-114.43H300v114.43l120 120v165.57Zm60-200Z" />
  </svg>
);
