import type { SVGProps } from "react";
export const SvgShield = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-100q-6 0-12-.5t-11-2.5q-131-43-210-159t-79-253v-180q0-22.69 12.5-40.85Q193-754 214-762l240-92q13-5 26-5t26 5l240 92q21 8 33.5 26.15Q792-717.69 792-695v180q0 137-79 253T503-103q-5 2-11 2.5t-12 .5Zm0-71q104-32.25 172-129t68-215v-180l-240-92-240 92v180q0 118.25 68 215t172 129Zm0-308Z" />
  </svg>
);
