import type { SVGProps } from "react";
export const SvgLoupe = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={24}
    viewBox="0 -960 960 960"
    width={24}
    fill="currentcolor"
    {...props}
  >
    <path d="M450-290h60v-160h160v-60H510v-160h-60v160H290v60h160v160Zm30 190q-78.85 0-148.2-29.92t-120.65-81.21q-51.3-51.29-81.22-120.63Q100-401.1 100-479.93q0-78.84 29.92-148.21t81.21-120.68q51.29-51.31 120.63-81.25Q401.1-860 479.93-860q78.84 0 148.21 29.93 69.37 29.92 120.68 81.22t81.25 120.65Q860-558.85 860-480v380H480Zm0-60q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
  </svg>
);
