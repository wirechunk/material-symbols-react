import type { SVGProps } from "react";
export const SvgCalendarViewDay = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M216-288q-29.7 0-50.85-21.15Q144-330.3 144-360v-240q0-29.7 21.15-50.85Q186.3-672 216-672h528q29.7 0 50.85 21.15Q816-629.7 816-600v240q0 29.7-21.15 50.85Q773.7-288 744-288H216Zm0-72h528v-240H216v240Zm-37-384q-14 0-24.5-10.35T144-780q0-14 11-25t25-11h601q15.26 0 25.13 11t9.87 25.5q0 14.5-10.35 25T780-744H179Zm0 600q-14 0-24.5-10.35T144-180q0-14 11-25t25-11h601q15.26 0 25.13 11t9.87 25.5q0 14.5-10.35 25T780-144H179Zm37-456v240-240Z" />
  </svg>
);
