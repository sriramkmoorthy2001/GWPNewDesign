import React from "react";

const GWPLogo = ({ isDark }) => {
  // Define path data

  return (
    <>
      <div className="relative top-1/2 left-1/4 md:left-1/2 -translate-x-1/2 -translate-y-1/2  w-34 h-32 flex items-center justify-center">
        <div className="relative top-1/2 scale-50 md:scale-75">
          <svg
            width="165"
            height="165"
            viewBox="0 0 651 651"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Animated Path 1 */}
            <path
              id="path1"
              d="M106.366 336C112.119 275.288 139.549 216.427 188.095 172.028C278.605 89.2495 412.651 84.0546 508.5 152.797"
              stroke="#57C2FF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="534.6488037109375"
              strokeDashoffset="534.6488037109375"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="534.6488037109375"
                to="0"
                dur="3s"
                calcMode="linear"
                begin="0s"
                fill="freeze"
              />
            </path>

            {/* Animated Path 2 */}
            <path
              id="path2"
              d="M524.501 165.27C532.78 172.272 540.707 179.882 548.219 188.096C643.228 291.978 636.034 453.21 532.152 548.219C442.973 629.78 311.53 636.023 216.001 570.436"
              stroke="#57C2FF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="775.411865234375"
              strokeDashoffset="775.411865234375"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="775.411865234375"
                to="0"
                dur="3s"
                calcMode="linear"
                begin="0s"
                fill="freeze"
              />
            </path>

            {/* Animated Path 3 */}
            <path
              id="path3"
              d="M205 562.44C193.34 553.478 182.297 543.38 172.028 532.151C127.131 483.061 105.057 421.164 105.224 359.5"
              stroke="#57C2FF"
              strokeWidth="4"
              strokeLinecap="round"
              strokeDasharray="234.3143310546875"
              strokeDashoffset="234.3143310546875"
              opacity="0.9"
            >
              <animate
                attributeName="stroke-dashoffset"
                from="234.3143310546875"
                to="0"
                dur="3s"
                calcMode="linear"
                begin="0s"
                fill="freeze"
              />
            </path>

            {/* Animated Circle 1 */}
            <circle
              cx="0"
              cy="0"
              r="11.4705"
              fill="#57C2FF"
              stroke="#57C2FF"
              strokeWidth="3.82348"
            >
              <animateMotion
                dur="3s"
                repeatCount="1"
                calcMode="linear"
                fill="freeze"
                path="M106.366 336C112.119 275.288 139.549 216.427 188.095 172.028C278.605 89.2495 412.651 84.0546 508.5 152.797"
                begin="0s"
                keyPoints="0;1"
                keyTimes="0;1"
              />
            </circle>

            {/* Animated Circle 2 */}
            <circle
              cx="0"
              cy="0"
              r="8.28422"
              fill="#57C2FF"
              stroke="#57C2FF"
              strokeWidth="3.82348"
            >
              <animateMotion
                dur="3s"
                repeatCount="1"
                calcMode="linear"
                fill="freeze"
                path="M524.501 165.27C532.78 172.272 540.707 179.882 548.219 188.096C643.228 291.978 636.034 453.21 532.152 548.219C442.973 629.78 311.53 636.023 216.001 570.436"
                begin="0s"
                keyPoints="0;1"
                keyTimes="0;1"
              />
            </circle>

            {/* Animated Circle 3 */}
            <circle
              cx="0"
              cy="0"
              r="14.6567"
              fill="#57C2FF"
              stroke="#57C2FF"
              strokeWidth="3.82348"
            >
              <animateMotion
                dur="3s"
                repeatCount="1"
                calcMode="linear"
                fill="freeze"
                path="M205 562.44C193.34 553.478 182.297 543.38 172.028 532.151C127.131 483.061 105.057 421.164 105.224 359.5"
                begin="0s"
                keyPoints="0;1"
                keyTimes="0;1"
              />
            </circle>
            <text
              x= "360.5"
              y= "350.5"
              fontFamily="sans-serif"
              fontSize="6rem"
              fill={isDark ? "#fff" : "#000"}
              textAnchor="middle"
              className="tracking-tight font-bold sm:font-extrabold drop-shadow-md"
            >
              GLOBAL
            </text>

            <text
              x= "365.5"
              y= "400.5"
              fontFamily="sans-serif"
              fontSize="48"
              fill={isDark ? "#fff" : "#000"}
              textAnchor="middle"
              className="tracking-tight font-medium sm:font-semibold uppercase"
            >
              Web Production
            </text>
          </svg>
        </div>
      </div>
    </>
  );
};

export default GWPLogo;
