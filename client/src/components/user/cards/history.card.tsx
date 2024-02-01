"use client";
import React from "react";
import { CardProps } from "@/components/user/cards/type";
import Link from "next/link";

export const HistoryCard: React.FC<CardProps> = (props) => {
  return (
    <Link
      href={"#"}
      className={
        "rounded-md flex flex-row items-center justify-between md:w-[600px] w-full  px-3.5 h-[100px] ring-1 ring-slate-400"
      }
    >
      <div className={"w-[32.5%]"}>
        <div className={"flex flex-row items-center justify-between gap-1.5"}>
          <div
            className={
              "flex flex-row items-center justify-center p-1.5 w-[40px] h-[40px] rounded-full  bg-green-100 font-medium text-green-800"
            }
          >
            80
          </div>
          <img width={"40px"} height={"40px"} src={"/club1.png"} alt={"logo"} />
          <p className={"text-slate-700 text-[16px] font-bold"}>Arsenal</p>
        </div>
      </div>
      <div className={"w-[5%]"}>
        <p className={"text-slate-900 text-[16px] font-bold"}>VS</p>
      </div>
      <div className={"w-[32.5%]"}>
        <div className={"flex flex-row items-center justify-between gap-1.5"}>
          <div
            className={
              "flex flex-row items-center justify-center p-1.5 w-[40px] h-[40px] rounded-full  bg-red-100 font-medium text-red-800"
            }
          >
            80
          </div>
          <img width={"40px"} height={"40px"} src={"/club2.png"} alt={"logo"} />
          <p className={"text-slate-800 text-[16px] font-bold"}>Arsenal</p>
        </div>
      </div>
      <div className={"w-[10%]"}>
        <div
          className={
            "text-center text-blue-600 min-w-[40px] w-auto px-2 rounded-full ring-1 ring-blue-600 bg-blue-50"
          }
        >
          80
        </div>
      </div>
    </Link>
  );
};
