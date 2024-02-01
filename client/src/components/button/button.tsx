"use client";
import React from "react";
import {
  ButtonProps,
  ButtonStandard,
  ButtonOutlined,
  ButtonLoadingOutlined,
  ButtonLoadingStandard,
} from "@/components/button";
export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <div className={"w-full h-fit"}>
      {props.variation === "standard" ? (
        <ButtonStandard {...props} />
      ) : props.variation === "outlined" ? (
        <ButtonOutlined {...props} />
      ) : props.variation === "loading-standard" ? (
        <ButtonLoadingStandard {...props} />
      ) : props.variation === "loading-outlined" ? (
        <ButtonLoadingOutlined {...props} />
      ) : null}
    </div>
  );
};
