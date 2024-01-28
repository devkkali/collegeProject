"use client";
import { Eye, EyeSlash } from "iconsax-react";
import React, { useState } from "react";
import { TextBoxInputProps } from "@/components/textbox";
export const Password: React.FC<TextBoxInputProps> = (props) => {
  const [toggle, setToggle] = useState("password");
  return (
    <div className={"w-full flex flex-row  items-center justify-end relative"}>
      <input
        type={toggle}
        {...props}
        aria-invalid={false}
        className={
          "placeholder:text-slate-400 mt-1 pr-6 pb-2 outline-none w-full border-b-[1.5px] border-slate-300 text-slate-900"
        }
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
  );
};
