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
    <path d="M192-384q-40 0-68-28t-28-68q0-40 28-68t68-28v-72q0-29.7 21.15-50.85Q234.3-720 264-720h120q0-40 28-68t68-28q40 0 68 28t28 68h120q29.7 0 50.85 21.15Q768-677.7 768-648v72q40 0 68 28t28 68q0 40-28 68t-68 28v168q0 29.7-21.16 50.85Q725.68-144 695.96-144H263.72Q234-144 213-165.15T192-216v-168Zm168-72q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14Zm228 0q20 0 34-14t14-34q0-20-14-34t-34-14q-20 0-34 14t-14 34q0 20 14 34t34 14ZM336-312h288v-72H336v72Zm-72 96h432v-432H264v432Zm216-216Z" />
  </svg>
);
