import type { SVGProps } from "react";
export const SvgStackedInbox = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M264-288q-29 0-50.5-21.5T192-360v-384q0-29.7 21.5-50.85Q235-816 264-816h528q29.7 0 50.85 21.15Q864-773.7 864-744v384q0 29-21.15 50.5T792-288H264Zm0-192v120h528v-120H652q-19 34-52.5 53T528-408q-38 0-71.5-19T404-480H264Zm264.21 0Q558-480 579-501.15T600-552h192v-192H264v192h192q0 30 21.21 51t51 21ZM720-144H120q-29 0-50.5-21.5T48-216v-456h72v456h600v72ZM264-360h528-528Z" />
  </svg>
);
