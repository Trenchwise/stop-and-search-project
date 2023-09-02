import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
c

const eyeAnimation = (props) => {
  const eyeAnimation = useRef();

  useLayoutEffect(() => {
    // first object explains where item begins and second item explains where item ends
    export const moveEyes = gsap.fromTo("eyes", { x: -500 }, { x: 500, duration: 5 });
  });
};

return (

) 

export default eyeAnimation;
