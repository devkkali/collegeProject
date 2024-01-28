import React from "react";

export interface ButtonMainProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonTittle?: string;
}

export interface ButtonProps extends ButtonMainProps {
  variation: "standard" | "outlined" | "loading-standard" | "loading-outlined";
  buttonTittle?: string;
}
