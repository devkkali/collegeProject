"use client";
import React from "react";
import { Button } from "@/components/button";
import { TextBox } from "@/components/textbox";

export const SignInScreenForm = () => {

  return (
    <form
      className="mt-6 flex flex-col gap-10 w-full"
    >
      <div className={"w-full h-[50px]"}>
        <TextBox
          id="email"
          variation="standard"
          placeholder="Enter Email Or Username"
          label="Email / Username"
        />
      </div>
      <div className={"w-full h-[50px]"}>
        <TextBox
          link={{
            name: "Forgot Password?",
            path: "#",
          }}
          id="password"
          variation="password"
          placeholder="Enter Password"
          label="Password"
        />
      </div>

      <div className={"w-full h-[50px]"}>
        <Button
          type="submit"
          variation={false ? "loading-standard" : "standard"}
        >
          Submit
        </Button>
      </div>
    </form>
  );
};
