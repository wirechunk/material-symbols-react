import type { SVGProps } from "react";
export const SvgArrowOrEdgeFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M300-120 140-280l56-56 64 63v-247H40v-320h80v240h220v327l63-63 57 56-160 160Zm360 0L500-280l56-56 64 63v-327h220v-240h80v320H700v248l63-64 57 56-160 160Z" />
  </svg>
);
