"use client";
import React, { forwardRef, useRef } from "react";
import { TextBoxInputProps } from "@/components/textbox";

export const Standard = forwardRef<HTMLInputElement, TextBoxInputProps>(
  (props, ref) => {
    return (
      <div className={"w-full flex flex-col min-h-14 max-h-20"}>
        <div className={"w-full flex flex-row items-center justify-between "}>
          <label className={"text-sm font-medium text-slate-600 "}>
            {props.label}
          </label>
        </div>
        <div
          className={"w-full flex flex-row items-center justify-end relative"}
        >
          <input
            {...props}
            ref={ref}
            aria-invalid={false}
            className={`disabled:pl-2 disabled:text-slate-600 disabled:pt-1.5 disabled:pr-3.5 placeholder:text-slate-400 pl-1 pt-1 mt-1 pr-3.5 pb-2 outline-none w-full border-b-[1.5px] ${
              props.errormessage ? "border-red-600" : "border-slate-300"
            } text-slate-900`}
          />
        </div>
        <p className={"mt-1 text-xs text-red-600"}>{props.errormessage}</p>
      </div>
    );
  }
);
