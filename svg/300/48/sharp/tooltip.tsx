import type { SVGProps } from "react";
export const SvgTooltip = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m480-100-97.08-147.77H100V-860h760v612.23H577.08L480-100Zm0-81.85 72.77-111.3h261.84v-521.46H145.39v521.46h261.84L480-181.85Zm0-372.53Z" />
  </svg>
);
