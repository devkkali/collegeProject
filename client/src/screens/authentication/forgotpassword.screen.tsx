"use client";
import React from "react";
import Link from "next/link";
import { ForgotPasswordScreenForm } from "@/screens/form/forgotpassword.screen.form";

export const ForgotPasswordScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className={"flex flex-col items-center justify-start w-[400px] h-[580px] bg-white p-4 border rounded-md shadow-md"}>
        <div className={"flex flex-col justify-between items-start p-1.5 w-full h-full"}>
          <div className={"w-full"}>
            <h2 className={"text-[24px] font-bold text-slate-900"}>
              Forgot Password
            </h2>
            <p className={"text-sm font-normal text-slate-400"}>
              Please enter your details to Forgot Password!
            </p>
          </div>
          <ForgotPasswordScreenForm />
          <div
            className={
              "w-full h-full flex flex-col gap-2 items-center justify-between"
            }
          >
            <div className={"mt-3 w-full text-center"}>
              <p className={"text-sm text-slate-700"}>
                Already have an account ?
              </p>
              <Link
                className={"text-blue-600 leading-8 hover:underline"}
                href={"#"}
              >
                Sign In
              </Link>
            </div>
            <p className={" text-xs text-slate-400 text-center"}>
              Copyrights (C) 2024
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
