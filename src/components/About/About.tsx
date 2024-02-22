import React, { useState, useEffect } from "react";
import PLACEHOLDER from "../../assets/placeholder.jpg";
import { throttle } from "lodash";
import "./About.css";

const AboutComponent: React.FC = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const shouldAnimate = window.scrollY > 250; // Arbitrary scroll position
      setAnimate(shouldAnimate);
    }, 200); // Adjust the throttle duration as needed

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Cancel any trailing invocation of the throttle function
    };
  }, []);
  return (
    <section id="about" className="bg-secondary overflow-hidden min-h-three">
      <div className="max-w-five grid gap-2xsmall md:gap-0 md:grid-cols-2 mx-auto min-h-three py-small md:py-0">
        {/* Image with squares */}
        <div className="relative w-full overflow-hidden flex justify-center items-center py-small">
          <div className="relative">
            <div className={(animate ? "about-medium-square" : "") + " absolute bg-secondary-lighter duration-100 w-one h-one rounded top-0 left-0 left-[-25.88px] transition-speed"}></div>
            <div className={(animate ? "about-small-square" : "") + " absolute bg-accent w-large h-large rounded top-one left-one transition-speed"}></div>
            <img src={PLACEHOLDER} className="relative z-1 w-two h-auto object-contain rounded" />
          </div>
        </div>
        {/* Text Section */}
        <div className="text-primary text-small18 flex flex-col justify-center px-2xsmall">
          <h3 className="text-large archivo">About</h3>
          <p>
            In 2021, I embarked on my tech journey through a Rutgers BootCamp, where I was introduced to the fundamentals of React. This initial step ignited my passion for web development, even as I
            explored other career paths.
          </p>
          <p>
            Choosing to diversify my skills, I spent a couple years as an HVAC technician, all the while continuing to hone my web development abilities. This unique blend of experiences has
            culminated in the creation of a diverse portfolio, including personal projects and websites for small businesses.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutComponent;
