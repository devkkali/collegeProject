"use client";
import React from "react";
import { Button } from "@/components/button";
import { TextBox } from "@/components/textbox";
import { Select } from "@/components/select";
export const SignUpScreenForm = () => {
  
  return (
    <form className={"mt-6 flex flex-col gap-10 w-full"}>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
              <TextBox
                id="username"
                variation="standard"
                placeholder="Enter Username"
                label="Username"
              />
        </div>
        <div className={"w-full h-[50px]"}>
              <TextBox
                id="email"
                variation="standard"
                placeholder="Enter Email Address"
                label="Email"
              />
        </div>
      </div>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
              <TextBox
                id="first_name"
                variation="standard"
                placeholder="Enter First Name"
                label="First Name"
              />
        </div>
        <div className={"w-full h-[50px]"}>
              <TextBox
                id="last_name"
                variation="standard"
                placeholder="Enter Last Name"
                label="Last Name"
              />
        </div>
      </div>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
              <Select
                id="gender"
                variation="standard"
                label="Gender"
                innerLabel={"Gender"}
                option={[
                  {
                    label: "Male",
                    id: "male",
                  },
                  {
                    label: "Female",
                    id: "female",
                  },
                  {
                    label: "Other",
                    id: "other",
                  },
                ]}
              />
        </div>

        <div className={"w-full h-[50px]"}>
              <TextBox
                id="dob"
                type={"date"}
                variation="standard"
                placeholder="Enter Date Of Birth"
                label="Date Of Birth"
              />
        </div>
      </div>
      <div className={"flex flex-row w-full h-fit gap-4"}>
        <div className={"w-full h-[50px]"}>
              <TextBox
                id="password"
                variation="password"
                placeholder="Enter Password"
                label="Password"
              />
        </div>
        <div className={"w-full h-[50px]"}>
              <TextBox
                id="cnf_password"
                variation="password"
                placeholder="Enter Confirm Password"
                label="Confirm Password"
              />
        </div>
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
