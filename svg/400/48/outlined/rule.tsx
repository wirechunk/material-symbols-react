import type { SVGProps } from "react";
export const SvgRule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="m576-160-42-42 111-111-111-111 42-42 111 111 111-111 42 42-111 111 111 111-42 42-111-111-111 111Zm83-374L517-676l42-42 100 99 179-179 42 43-221 221ZM80-290v-60h360v60H80Zm0-320v-60h360v60H80Z" />
  </svg>
);
