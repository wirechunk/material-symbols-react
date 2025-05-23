import type { SVGProps } from "react";
export const SvgFluidFill = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={48}
    viewBox="0 -960 960 960"
    width={48}
    fill="currentcolor"
    {...props}
  >
    <path d="M520-40q-28.87 0-49.44-20.56Q450-81.13 450-110v-92q-106-11-178-90t-72-188v-380q0-24.75 17.63-42.38Q235.25-920 260-920h440q24.75 0 42.38 17.62Q760-884.75 760-860v380q0 109-72 188t-178 90v102h250v60H520Zm40-390h134q3-12 4.5-24.5T700-480v-50H520v-60h180v-100H480v-60h220v-110H260v350h110q32 0 59.5 10t47.5 29q22 21 42.5 31t40.5 10Z" />
  </svg>
);
