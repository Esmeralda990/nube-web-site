/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
import React, { useRef, useEffect, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import PropTypes from "prop-types";

export const ContainerScroll = ({ titleComponent, children }) => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const scaleDimensions = isMobile ? [0.6, 0.8] : [1.2, 1.2];
  const rotate = useTransform(scrollYProgress, [0, 1], [40, -30]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions);
  const translate = useTransform(scrollYProgress, [0, 1], [10, -50]);

  return (
    <div
      className="h-[40rem] md:h-[50rem] flex items-center justify-center relative p-2"
      ref={containerRef}
    >
      <div
        className="py-10 md:py-32 w-full relative"
        style={{ perspective: "1000px" }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card rotate={rotate} scale={scale} translate={translate}>
          {children}
        </Card>
      </div>
    </div>
  );
};

ContainerScroll.propTypes = {
  titleComponent: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
};

export const Header = ({ translate, titleComponent }) => {
  return (
    <motion.div
      style={{ translateY: translate || 0 }}
      className="max-w-5xl mx-auto text-center"
    >
      {titleComponent}
    </motion.div>
  );
};

Header.propTypes = {
  translate: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
  titleComponent: PropTypes.node.isRequired,
};

export const Card = ({ rotate, scale, translate, children }) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        translateY: translate,
        boxShadow:
          "0 4px 10px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.15)",
      }}
      className="max-w-5xl md:mt-8 mx-auto h-[20rem] md:h-[40rem] w-full border-4 border-white p-2 md:p-6 bg-white rounded-[30px] shadow-xl"
      transition={{
        duration: 0.1,
        ease: "easeInOut",
      }}
    >
      <div className="h-full w-full overflow-hidden rounded-2xl bg-white  md:p-4">
        {children}
      </div>
    </motion.div>
  );
};

Card.propTypes = {
  rotate: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
  scale: PropTypes.oneOfType([PropTypes.object, PropTypes.number]).isRequired,
  translate: PropTypes.oneOfType([PropTypes.object, PropTypes.number])
    .isRequired,
  children: PropTypes.node.isRequired,
};
