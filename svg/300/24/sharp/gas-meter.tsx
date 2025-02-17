import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M180-100v-680h190v-80h60v80h100v-80h60v80h190v680H180Zm60-60h480v-560H240v560Zm90-410h300v-60H330v60Zm149.93 316.54q37.45 0 63.38-25.62 25.92-25.61 25.92-61.92 0-29.23-16.95-50.22-16.96-21-72.28-85.32-56.08 64.31-72.65 85.64-16.58 21.33-16.58 49.77 0 36.44 25.86 62.05 25.86 25.62 63.3 25.62ZM240-160v-560 560Z" />
  </svg>
);
