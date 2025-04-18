import type { SVGProps } from "react";
export const SvgChessPawn = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    height={20}
    viewBox="0 -960 960 960"
    width={20}
    fill="currentcolor"
    {...props}
  >
    <path d="M192-96v-192q82-57 122-123.5T369-528H264v-72.16h78q-14-19.84-22-44.2-8-24.36-8-51.64 0-70 49-119t119-49q70 0 119 49t49 119q0 27.28-8 51.64t-22 44.2h78V-528H591q15 50 55 116.5t122 123.96V-96H192Zm72-72h432v-84q-87-69-126.5-145.5T516-528h-72q-14 54-53.5 130.5T264-252v84Zm215.77-432Q520-600 548-627.77q28-27.78 28-68Q576-736 548.23-764q-27.78-28-68-28Q440-792 412-764.23q-28 27.78-28 68Q384-656 411.77-628q27.78 28 68 28Zm.23 432Zm0-528Z" />
  </svg>
);
