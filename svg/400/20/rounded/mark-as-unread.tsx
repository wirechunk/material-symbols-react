import type { SVGProps } from "react";
export const SvgMarkAsUnread = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M168-288q-30-2-51-22.56Q96-331.13 96-360v-314q0-21 11.5-38.5T138-739l240-111q14-7 30-7t30 7l240 111q14 6 24 17.5t14 25.5H600l-192-89-240 111v386Zm144 144q-29 0-50.5-21.5T240-216v-336q0-29.7 21.5-50.85Q283-624 312-624h480q29 0 50.5 21.15T864-552v336q0 29-21.5 50.5T792-144H312Zm205-211L312-469v253h480v-253L587-355q-17 9-35 9t-35-9Zm35-64 240-133H312l240 133Zm240-133H312h480Z" />
  </svg>
);
