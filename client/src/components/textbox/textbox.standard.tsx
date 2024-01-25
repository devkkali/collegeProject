"use client";
import React from "react";
import { TextBoxInputProps } from "@/components/textbox";
export const Standard: React.FC<TextBoxInputProps> = (props) => {
  return (
    <input
      {...props}
      aria-invalid={false}
      className={
        "placeholder:text-slate-400 mt-1 pr-2 pb-2 outline-none w-full border-b-[1.5px] border-slate-300 text-slate-900"
      }
    />
  );
};
