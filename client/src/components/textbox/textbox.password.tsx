"use client";
import { Eye, EyeSlash } from "iconsax-react";
import React, { forwardRef, useState } from "react";
import { TextBoxInputProps } from "@/components/textbox";
import Link from "next/link";

export const Password = forwardRef<HTMLInputElement, TextBoxInputProps>(
  (props, ref) => {
    const [toggle, setToggle] = useState("password");

    return (
      <div className={"w-full flex flex-col min-h-14 max-h-20 "}>
        <div className={"w-full flex flex-row items-center justify-between "}>
          <label className={"text-sm font-medium text-slate-600 "}>
            {props.label}
          </label>
          <Link
            className={"text-[12px] text-blue-600 hover:underline"}
            href={(props.link?.path as string) || "#"}
          >
            {props.link?.name}
          </Link>
        </div>
        <div
          className={"w-full flex flex-row  items-center justify-end relative"}
        >
          <input
            type={toggle}
            {...props}
            ref={ref}
            aria-invalid={false}
            className={`disabled:pl-2 disabled:text-slate-600 disabled:pt-1.5 disabled:pr-3.5 placeholder:text-slate-400 pl-1 pt-1 mt-1 pr-6 pb-2 outline-none w-full border-b-[1.5px] ${
              props.errormessage ? "border-red-600" : "border-slate-300"
            } text-slate-900`}
          />
          <div
            onClick={() =>
              setToggle((prevType) =>
                prevType === "password" ? "text" : "password"
              )
            }
            className="absolute"
          >
            {toggle === "password" ? (
              <Eye color="#020617" />
            ) : (
              <EyeSlash color="#020617" />
            )}
          </div>
        </div>

        <p className={"mt-1 text-xs text-red-600"}>{props.errormessage}</p>
      </div>
    );
  }
);
