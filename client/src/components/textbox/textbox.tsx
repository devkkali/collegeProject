"use client";
import React, { useState } from "react";
import { Password, Standard, TextBoxProps } from "@/components/textbox";
import { Save } from "@/components/save/save";
import { Label } from "@/components/label/label";
import { Info } from "@/components/info/info";
import { TextBoxEdit } from "@/components/textbox/textbox.edit";

export const TextBox: React.FC<TextBoxProps> = (props) => {
  return (
    <>
      {props.variation === "standard" ? (
        <Standard {...props} />
      ) : props.variation === "password" ? (
        <Password {...props} />
      ) : props.variation === "standard-edit" ? (
        <TextBoxEdit {...props} />
      ) : null}
    </>
  );
};
