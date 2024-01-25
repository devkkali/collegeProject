import React from "react";
import { ButtonMainProps } from "@/components/button/type";

export const ButtonStandard: React.FC<ButtonMainProps> = (props) => {
  return (
    <button className={"rounded w-full h-fit p-3 bg-blue-600"} {...props}>
      <p className={"text-white font-medium"}>{props.buttonTittle}</p>
    </button>
  );
};
