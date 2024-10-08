import type { SVGProps } from "react";
export const Svg2D = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M316.52-384h144v-48h-96v-28h72q10.2 0 17.1-6.9 6.9-6.9 6.9-17.1v-68q0-10.2-6.9-17.1-6.9-6.9-17.1-6.9h-120v48h96v28h-72q-10.2 0-17.1 6.9-6.9 6.9-6.9 17.1v92Zm180.7 0H587q20.4 0 34.2-13.8Q635-411.6 635-432v-96q0-20.4-13.8-34.2Q607.4-576 587-576h-89.78v192Zm48-48v-96H587v96h-41.78ZM222.78-124.78q-41 0-69.5-28.5t-28.5-69.5v-514.44q0-41 28.5-69.5t69.5-28.5h514.44q41 0 69.5 28.5t28.5 69.5v514.44q0 41-28.5 69.5t-69.5 28.5H222.78Zm0-98h514.44v-514.44H222.78v514.44Zm0-514.44v514.44-514.44Z" />
  </svg>
);
