import type { SVGProps } from "react";
export const SvgSwipeVertical = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M96-96v-48h104q-75-60-113.5-149T48-480q0-98 38.5-187T200-816H96v-48h192v192h-48v-114q-72 52-108 133.5T96-480q0 91 36 172.5T240-174v-114h48v192H96Zm208-178 36-76 119-12-123-339 68-25 155 428-114 11 160 75 258-94-106-293 67-24 132 361-355 127-297-139Zm260-153-66-179 68-25 65 180-67 24Zm112-41-48-135 67-24 49 135-68 24Zm-2 85Z" />
  </svg>
);
