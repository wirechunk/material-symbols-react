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
    <path d="M621-510h159v-190H621v190Zm-221 0h161v-190H400v190Zm-219 0h159v-190H181v190Zm0 250h159v-190H181v190Zm219 0h161v-190H400v190Zm221 0h159v-190H621v190Zm-500 60v-560h719v560H121Z" />
  </svg>
);
