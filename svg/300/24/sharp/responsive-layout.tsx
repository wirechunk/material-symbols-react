import type { SVGProps } from "react";
export const SvgResponsiveLayout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M140-140v-480h200v-200h480v680H140Zm480-60h140v-560H400v140h220v420Zm-220 0h160v-360H400v360Zm-200 0h140v-360H200v360Zm420-420v60-60Zm-280 60Zm220 0Zm60-60Z" />
  </svg>
);
