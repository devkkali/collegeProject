"use client";
import React, { useState } from "react";
import { TextBoxProps } from "@/components/textbox";
import { Save } from "@/components/save/save";
import { Label } from "@/components/label/label";
import { Info } from "@/components/info/info";
import { TextBoxEdit } from "@/components/textbox/textbox.edit";

export const TextBox: React.FC<TextBoxProps> = (props) => {
  const [value, setValue] = useState<string | number | null | undefined>(
    props.value as string
  );
  return (
    <div className={"w-full flex flex-col gap-0"}>
      <Save
        onSave={() => {
          props.onSave({
            key: props.id,
            value: value,
          });
        }}
      >
        <Label>{props.label}</Label>
      </Save>
      {props.variation === "standard" && (
        <TextBoxEdit
          onChange={(event) => {
            setValue(event.target.value);
            props.onSave({
              key: props.id,
              value: props.value as string,
            });
          }}
          {...props}
        />
      )}
      <Info>Password Wrong</Info>
    </div>
  );
};
