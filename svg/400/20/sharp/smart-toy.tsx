import type { SVGProps } from "react";
export const SvgSmartToy = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-384q-40 0-68-28t-28-68q0-40 28-68t68-28v-144h192q0-40 28-68t68-28q40 0 68 28t28 68h192v144q40 0 68 28t28 68q0 40-28 68t-68 28v240H192v-240Zm168-72q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm228 0q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14ZM336-312h288v-72H336v72Zm-72 96h432v-432H264v432Zm216-216Z" />
  </svg>
);
