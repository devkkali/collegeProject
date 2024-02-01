"use client";
import React, { forwardRef } from "react";
import { ButtonMainProps } from "@/components/button";

export const ButtonStandard = forwardRef<HTMLButtonElement, ButtonMainProps>(
  (props, ref) => {
    return (
      <button
        ref={ref}
        className={"rounded w-full h-fit p-3 bg-blue-600"}
        {...props}
      >
        <p className={"text-white font-medium"}>{props.children}</p>
      </button>
    );
  }
);
