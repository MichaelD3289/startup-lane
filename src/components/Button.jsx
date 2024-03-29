import React from "react";
import { Link } from "react-router-dom";

function Button({
  children,
  onClick,
  className,
  size = "reg",
  fontSize = "1.5rem",
  style = {},
  variant = "outline",
  color = "primary",
  type = "button",
  to = "#",
  ...props
}) {
  let colorCode;
  switch (color) {
    case "primary":
      colorCode = "#EF7F1A";
      break;
    case "secondary":
      colorCode = "#5B5B5B";
      break;
    case "accent":
      colorCode = "#4EA5D9";
      break;
    default:
      colorCode = color;
  }

  let variantStyle;
  switch (variant) {
    case "outline":
      variantStyle = {
        border: `3px solid ${colorCode}`,
        color: colorCode,
        backgroundColor: "#FFF",
      };
      break;
    case "solid":
      variantStyle = {
        backgroundColor: colorCode,
        border: `3px solid ${colorCode}`,
        color: "#FFF",
      };
      break;
    default:
      variantStyle = variant;
  }

  let buttonSize;
  switch (size) {
    case "sm":
      buttonSize = "clamp(1rem, 1.75vw, 1.15rem)";
      break;
    case "reg":
      buttonSize = "clamp(1.15rem, 1.75vw, 1.5rem)";
      break;
    case "lg":
      buttonSize = "clamp(1.5rem, 2.25vw, 1.875rem)";
      break;
    default:
      buttonSize = size;
  }

  let buttonElement;
  if (type === "pageLink") {
    buttonElement = (
      <Link
        to={to}
        onClick={onClick}
        className={`btn ${className}`}
        style={{
          fontSize: buttonSize,
          fontWeight: parseInt(fontSize) > 1.5 ? "semibold" : "medium",
          fontFamily: "'Oswald', sans-serif",
          padding: "0.625em 1.75em",
          boxShadow: "3px 3px 6px #5B5B5B",
          borderRadius: "5px",
          display: "inline-block",
          ...variantStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </Link>
    );
  } else if (type === "idLink") {
    buttonElement = (
      <a
        href={to}
        onClick={onClick}
        className={`btn ${className}`}
        style={{
          fontSize: buttonSize,
          fontWeight: parseInt(fontSize) > 1.5 ? "semibold" : "medium",
          fontFamily: "'Oswald', sans-serif",
          padding: "0.625em 1.75em",
          boxShadow: "3px 3px 6px #5B5B5B",
          borderRadius: "5px",
          display: "inline-block",
          ...variantStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </a>
    );
  } else {
    buttonElement = (
      <button
        onClick={onClick}
        className={`btn ${className}`}
        style={{
          fontSize: buttonSize,
          fontWeight: parseInt(fontSize) > 1.5 ? "semibold" : "medium",
          fontFamily: "'Oswald', sans-serif",
          padding: "0.375em 1.75em",
          boxShadow: "3px 3px 6px #5B5B5B",
          borderRadius: "5px",
          ...variantStyle,
          ...style,
        }}
        {...props}
      >
        {children}
      </button>
    );
  }

  return buttonElement;
}

export default Button;
