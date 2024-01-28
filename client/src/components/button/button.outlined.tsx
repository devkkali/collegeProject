import React from "react";
import { ButtonMainProps } from "@/components/button/type";

export const ButtonOutlined: React.FC<ButtonMainProps> = (props) => {
  return (
    <button
      className={"rounded w-full h-fit p-3 ring-2 ring-blue-600"}
      {...props}
    >
      <p className={"text-blue-700 font-medium"}>{props.children}</p>
    </button>
  );
};
