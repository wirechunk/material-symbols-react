import type { SVGProps } from "react";
export const SvgViewModule = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M621-510h159v-184.91H621V-510Zm-220.43 0h161v-184.91h-161V-510Zm-219 0h159v-184.91h-159V-510Zm0 244.91h159V-450h-159v184.91Zm219 0h161V-450h-161v184.91Zm220.43 0h159V-450H621v184.91Zm-519.22 0v-429.82q0-32.91 23.44-56.35 23.43-23.44 56.35-23.44H780q32.91 0 56.35 23.44 23.43 23.44 23.43 56.35v429.82q0 32.68-23.43 55.95-23.44 23.27-56.35 23.27H181.57q-32.92 0-56.35-23.27-23.44-23.27-23.44-55.95Z" />
  </svg>
);
