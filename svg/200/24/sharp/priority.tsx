import type { SVGProps } from "react";
export const SvgPriority = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M360-160q-83.33 0-141.67-58.33Q160-276.67 160-360v-240q0-83.33 58.33-141.67Q276.67-800 360-800h240q83.33 0 141.67 58.33Q800-683.33 800-600v240q0 83.33-58.33 141.67Q683.33-160 600-160H360Zm80-187.69L652.31-560 624-588.31l-184 184-88-88L323.69-464 440-347.69ZM360-200h240q66 0 113-47t47-113v-240q0-66-47-113t-113-47H360q-66 0-113 47t-47 113v240q0 66 47 113t113 47Zm120-280Z" />
  </svg>
);
