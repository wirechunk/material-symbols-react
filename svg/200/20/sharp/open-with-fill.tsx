import type { SVGProps } from "react";
export const SvgOpenWithFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-123.69 339.69-264l22.54-22.54L464-184.77V-388h32v204l102.54-101.77L620.31-264 480-123.69Zm-216-216L123.69-480l141.08-141.08 22.54 22.54L184.77-496H388v32H184l101.77 102.54L264-339.69Zm432 0-22.54-22.54L775.23-464H572v-32h204L674.23-598.54 696-620.31 836.31-480 696-339.69ZM464-572v-203.23L362.23-673.46 339.69-696 480-836.31 620.31-696l-22.54 22.54L496-775.23V-572h-32Z" />
  </svg>
);
