import React from "react";
import type { SVGProps } from "react";

interface CustomSVGProps extends React.SVGProps<SVGSVGElement> {
  size?: string;
}

export default function GatsbyIcon(props: CustomSVGProps) {
  const { size, ...other } = props;

  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 32 32" {...props}>
      <path
        fill="#fff"
        d="M27 16h-7v2h4.8a9.066 9.066 0 0 1-5.8 6.5L7.5 13A9 9 0 0 1 16 7a9.232 9.232 0 0 1 7.4 3.8l1.5-1.3a10.993 10.993 0 0 0-19.6 4.1l13.2 13.2A11.251 11.251 0 0 0 27 16m-22 .1a10.682 10.682 0 0 0 3.2 7.6a10.855 10.855 0 0 0 7.6 3.2Z"
      ></path>
      <path
        fill="#639"
        d="M16 2a14 14 0 1 0 14 14A14.041 14.041 0 0 0 16 2M8.2 23.8A10.855 10.855 0 0 1 5 16.2L15.9 27a11.351 11.351 0 0 1-7.7-3.2m10.2 2.9L5.3 13.6a10.993 10.993 0 0 1 19.6-4.1l-1.5 1.3A9.232 9.232 0 0 0 16 7a9.1 9.1 0 0 0-8.5 6L19 24.5a9.066 9.066 0 0 0 5.8-6.5H20v-2h7a11.031 11.031 0 0 1-8.6 10.7"
      ></path>
    </svg>
  );
}
