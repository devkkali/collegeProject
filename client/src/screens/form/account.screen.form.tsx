"use client";
import { TextBox } from "@/components/textbox";
import React, { useState } from "react";

export const AccountDetailsForm = () => {
  const [data, setData] = useState("");
  return (
    <form className={"w-full flex flex-col gap-4"}>
      <TextBox
        id={"first_name"}
        variation={"standard"}
        placeholder={"Enter First Name"}
        label={"First Name"}
        onSave={(data) => {
          console.log(data);
        }}
      />
      <TextBox
        id={"first_name"}
        variation={"standard"}
        placeholder={"Enter Last Name"}
        label={"Last Name"}
        onSave={(data) => {
          console.log(data);
        }}
      />
      <TextBox
        id={"first_name"}
        variation={"standard"}
        placeholder={"Enter User Name"}
        label={"User Name"}
        onSave={(data) => {
          console.log(data);
        }}
      />
      <TextBox
        id={"email"}
        variation={"standard"}
        placeholder={"Enter Email"}
        label={"Email"}
        onSave={(data) => {
          console.log(data);
        }}
      />
    </form>
  );
};
