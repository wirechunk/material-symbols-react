import type { SVGProps } from "react";
export const SvgGasMeter = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M335.58-96Q276-96 234-138t-42-102v-408q0-60 42-102t102-42h24v-72h72v72h96v-72h72v72h24q60 0 102 42t42 102v408q0 60-42 102T624.42-96H335.58Zm.48-72h288.22Q654-168 675-189.15T696-240v-408q0-29.7-21.17-50.85Q653.67-720 623.94-720H335.72Q306-720 285-698.85T264-648v408q0 29.7 21.17 50.85Q306.33-168 336.06-168ZM336-576h288v-72H336v72Zm144.5 312q37.5 0 66.5-27.63T576-359q0-31-20-55t-76-90q-56 66-76 90t-20 55.02q0 39.73 29.5 67.36Q443-264 480.5-264ZM264-720v551-551Z" />
  </svg>
);
