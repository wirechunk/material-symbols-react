import type { SVGProps } from "react";
export const SvgGrocery = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M648-96q-90 0-153-63t-63-153q0-90 63-153t153-63q90 0 153 63t63 153q0 90-63 153T648-96Zm0-72q60 0 102-42t42-102q0-60-42-102t-102-42q-60 0-102 42t-42 102q0 60 42 102t102 42ZM96-144v-386l96-238h-48v-96h336v96h-48l81 202q-17 8-31.5 19T453-523l-98-245h-85L168-514v298h209q5 20 16 37t21 35H96Zm528-432q-40.32 0-68.16-27.77-27.84-27.78-27.84-68Q528-712 555.84-740q27.84-28 68.16-28v192q0-40.32 27.84-68.16Q679.68-672 720-672q40.32 0 68.16 27.84Q816-616.32 816-576H624Z" />
  </svg>
);
