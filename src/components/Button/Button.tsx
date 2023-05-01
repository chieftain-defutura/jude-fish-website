import React, { ButtonHTMLAttributes } from "react";
import "./Button.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({
  varient,
  size,
  leftIcon,
  rightIcon,
  children,
  ...rest
}) => {
  return (
    <div>
      <button className={`btn btn-${varient} ${size} `} {...rest}>
        {leftIcon && <span className="left-icon">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="right-icon">{rightIcon}</span>}
      </button>
    </div>
  );
};

export default Button;
