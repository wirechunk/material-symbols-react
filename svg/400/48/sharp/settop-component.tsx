import type { SVGProps } from "react";
export const SvgSettopComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M80-280v-400h800v400H80Zm60-60h680v-280H140v280Zm80-110h220v-60H220v60Zm340 0h60v-60h-60v60Zm120 0h60v-60h-60v60ZM140-340v-280 280Z" />
  </svg>
);
