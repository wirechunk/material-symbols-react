import type { SVGProps } from "react";
export const SvgWaterDrop = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M480-96q-130 0-221-91t-91-221q0-61 27.5-120.5t69-114.5Q306-698 354-746t89-85q8-7 17.5-10.5T480-845q10 0 19 3.5t17 11.5q40 37 88 85t90 103q42 55 70 114.5T792-408q0 130-91 221T480-96Zm0-72q100 0 170-70t70-170q0-68-54-149T480-769Q348-638 294-557t-54 149q0 100 70 170t170 70Zm0-312Zm28 262q8-1 14-7.5t6-16.5q0-11-8-18t-19-5q-58 8-106.5-27T337-387q-1-9-7.5-15t-15.5-6q-11 0-18.5 8t-5.5 19q11 78 74 126t144 37Z" />
  </svg>
);
