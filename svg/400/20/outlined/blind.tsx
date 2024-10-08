import type { SVGProps } from "react";
export const SvgBlind = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="m264-96-48-48 96-120v-192q0-28 4.5-55.5T329-566l-65 27v107h-72v-154l173-74q14-6 27.5-9t27.5-3q18 0 34.5 7.5T482-643l28 37q31 41 71 71t91 30v72l-17-2 185 321-31 18-200-347q-42-12-77.5-37T471-541q-8 27-11.5 55t-1.5 57l70 93v240h-72v-192l-63-78-9 126L264-96Zm216-600q-35 0-59.5-24.5T396-780q0-35 24.5-59.5T480-864q35 0 59.5 24.5T564-780q0 35-24.5 59.5T480-696Z" />
  </svg>
);
