import React, { useRef } from "react";
import gsap from "gsap";

// import gsap from "gsap";

const Header = () => {
  // const MoveEyes = ({ eyes }) => {
  //   gsap.fromTo(
  //     "eyes",
  //     { x: -500, fill: "blue" },
  //     { x: 500, duration: 50, fill: "green" }
  //   );
  // };

  return (
    <>
      <div className="headerWrapper">
        <header id="header">
          {" "}
          <h1 className="headerTitle"> Crime Checker</h1>
          <div className="headerSvgWrapper">
            <svg
              id="headersvg"
              // width="800px"
              // height="800px"
              viewBox="0 0 400 400"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" stroke-width="0" />

              <g
                id="SVGRepo_tracerCarrier"
                stroke-linecap="round"
                stroke-linejoin="round"
              />

              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  className="glasses"
                  d="M107.959 118.707C112.507 109.238 119.972 102.956 130.392 101.245C179.396 93.2005 214.204 155.467 173.452 188.916C136.661 219.112 88.5141 182.545 101.445 140.091"
                  stroke="#1b2d48" // glasses
                  stroke-opacity="0.9"
                  stroke-width="20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  className="glasses"
                  d="M223.138 126.077C256.976 65.954 347.241 123.665 303.865 178.979C274.655 216.229 207.817 202.447 216.774 149.735"
                  stroke="#1b2d48" //glasses
                  stroke-opacity="0.9"
                  stroke-width="20"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M89.8422 154.097C79.9992 170.208 37.6369 197.245 28.5285 218.499C21.7425 234.332 92.924 220.223 102.399 218.499"
                  stroke="#888888" //elbow
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M324.597 159.292C395.562 218.499 388.822 230.513 290.988 230.513"
                  stroke="#888888" //elbow right
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M290.988 230.513C291.352 256.859 299.318 320.051 294.391 346.115"
                  stroke="#888888" //body right
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M102.402 218.5C108.739 248.16 110.802 315.959 110.802 346.115"
                  stroke="#888888" //body left
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M137.364 91.9387C172.521 41.4597 241.039 42.7016 266.303 86.6748"
                  stroke="#888888" //head
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M195.08 148.426C199.92 146.748 211.061 147.13 215.956 147.596"
                  stroke="#0c0c0d" //glasses middle bit
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M132.697 205.682C157.035 257.62 239.597 256.499 260.201 211.626"
                  stroke="#888888" //chin
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  className="eye"
                  d="M142.439 155.071C142.866 151.4 142.787 147.686 142.787 143.991"
                  stroke="hsl(30,100%,24%)" //left eye
                  stroke-opacity="1"
                  stroke-width="30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  className="eye"
                  d="M265.689 160.092C265.689 155.18 265.811 151.693 266.303 147.198"
                  stroke="hsl(30,100%,24%)" //right eye
                  stroke-opacity="1"
                  stroke-width="30"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M91.5781 167.377C86.3674 153.643 89.5855 145.207 91.7203 135.239"
                  stroke="#888888"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M327.589 159.301C332.555 150.783 329.747 143.94 324.789 136.501"
                  stroke="#888888"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M324.393 168.901C325.826 168.178 326.526 166.501 327.593 165.301"
                  stroke="#888888"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
                <path
                  d="M94.0039 160.501C95.4013 159.585 96.9383 159.701 98.4035 159.301"
                  stroke="#888888"
                  stroke-opacity="0.9"
                  stroke-width="16"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />{" "}
              </g>
            </svg>
          </div>
        </header>
        {/* <EyeAnimation moveEyes={moveEyes} /> */}
      </div>
    </>
  );
};

export default Header;
