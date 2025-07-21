/* eslint-disable linebreak-style */
/* eslint-disable react/require-default-props */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable object-curly-newline */
/* eslint-disable comma-dangle */
/* eslint react/prop-types: "off" */
/* eslint-disable react/no-array-index-key */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";
import PropTypes from "prop-types";

export default function GlowCard({ children, className = "" }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      className={`relative group overflow-hidden rounded-xl transition-shadow duration-300 ${className}`}
    >
      {hovering && (
        <div
          className="pointer-events-none absolute h-60 w-60 rounded-full bg-gradient-to-br from-white via-theme-teal to-theme-blue opacity-40 blur-2xl transition-opacity duration-300 dark:block hidden"
          style={{
            top: position.y - 80,
            left: position.x - 80,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </div>
  );
}

GlowCard.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

GlowCard.defaultProps = {
  className: "",
};
