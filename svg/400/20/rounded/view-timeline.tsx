import type { SVGProps } from "react";
export const SvgViewTimeline = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M276-288h120q15.3 0 25.65-10.29Q432-308.58 432-323.79t-10.35-25.71Q411.3-360 396-360H276q-15.3 0-25.65 10.29Q240-339.42 240-324.21t10.35 25.71Q260.7-288 276-288Zm144-156h120q15.3 0 25.65-10.29Q576-464.58 576-479.79t-10.35-25.71Q555.3-516 540-516H420q-15.3 0-25.65 10.29Q384-495.42 384-480.21t10.35 25.71Q404.7-444 420-444Zm144-156h120q15.3 0 25.65-10.29Q720-620.58 720-635.79t-10.35-25.71Q699.3-672 684-672H564q-15.3 0-25.65 10.29Q528-651.42 528-636.21t10.35 25.71Q548.7-600 564-600ZM216-144q-29.7 0-50.85-21.15Q144-186.3 144-216v-528q0-29.7 21.15-50.85Q186.3-816 216-816h528q29.7 0 50.85 21.15Q816-773.7 816-744v528q0 29.7-21.15 50.85Q773.7-144 744-144H216Zm0-72h528v-528H216v528Zm0-528v528-528Z" />
  </svg>
);
