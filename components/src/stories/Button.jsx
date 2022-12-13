import React from "react";
import PropTypes from "prop-types";
/**
 * Primary UI component for user interaction
 */
export const Button = ({ darkMode, size, text }) => {
  const mode = darkMode ? "gr-button--dark" : "gr-button--light";
  return (
    <button
      type="button"
      className={["gr-button", `gr-button--${size}`, mode].join(" ")}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  darkMode: PropTypes.bool,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  text: PropTypes.string.isRequired,
};

Button.defaultProps = {
  darkMode: false,
  size: "medium",
  text: "",
};
