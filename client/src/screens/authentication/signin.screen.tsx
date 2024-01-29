"use client";
import React from "react";
import { SignInScreenForm } from "@/screens/form/signin.screen.form";
import Link from "next/link";

export const SignInScreen: React.FC = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className= "flex flex-col items-center justify-start w-[400px] h-[580px] bg-white p-4 border rounded-md shadow-md">
        <div className="flex flex-col justify-between items-start p-1.5 w-full h-full">
          <div className={"w-full"}>
            <h2 className={"text-[24px] font-bold text-slate-900"}>
              Welcome Back!
            </h2>
            <p className={"text-sm font-normal text-slate-400"}>
              Please enter your details to Sign in!
            </p>
          </div>
          <SignInScreenForm />
          <div
            className={
              "w-full h-full flex flex-col gap-2 items-center justify-between"
            }
          >
            <p className={"mt-3 text-[18px] font-bold text-slate-400"}>OR</p>
            <button
              className={
                "flex flex-row items-center justify-center gap-3 rounded w-full h-fit p-3 ring-black ring-1"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(0,0,0,1)"
              >
                <path fill="none" d="M0 0h24v24H0z"></path>
                <path d="M3.06364 7.50914C4.70909 4.24092 8.09084 2 12 2C14.6954 2 16.959 2.99095 18.6909 4.60455L15.8227 7.47274C14.7864 6.48185 13.4681 5.97727 12 5.97727C9.39542 5.97727 7.19084 7.73637 6.40455 10.1C6.2045 10.7 6.09086 11.3409 6.09086 12C6.09086 12.6591 6.2045 13.3 6.40455 13.9C7.19084 16.2636 9.39542 18.0227 12 18.0227C13.3454 18.0227 14.4909 17.6682 15.3864 17.0682C16.4454 16.3591 17.15 15.3 17.3818 14.05H12V10.1818H21.4181C21.5364 10.8363 21.6 11.5182 21.6 12.2273C21.6 15.2727 20.5091 17.8363 18.6181 19.5773C16.9636 21.1046 14.7 22 12 22C8.09084 22 4.70909 19.7591 3.06364 16.4909C2.38638 15.1409 2 13.6136 2 12C2 10.3864 2.38638 8.85911 3.06364 7.50914Z"></path>
              </svg>
              <p>Google</p>
            </button>
            <div className={"mt-3 w-full text-center"}>
              <p className={"text-sm text-slate-700"}>
                Don't have an account ?
              </p>
              <Link
                className={"text-blue-600 leading-8 hover:underline"}
                href={"/auth/sign-up"}
              >
                Create
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
