import type { SVGProps } from "react";
export const SvgDoorbell = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-276q15 0 25.5-10.5T516-312h-72q0 15 10.5 25.5T480-276Zm-120-60h240v-24h-24v-96q0-33-20-59t-52-34v-27h-48v27q-32 9-52 34.5T384-456v96h-24v24ZM192-144v-456l288-216 288 216v456H192Zm72-72h432v-348L480-726 264-564v348Zm216-255Z" />
  </svg>
);
