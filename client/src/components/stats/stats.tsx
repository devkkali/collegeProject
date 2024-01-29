"use client";
import React from "react";
import { StatsProps } from "@/components/stats/type";

export const Stats: React.FC<StatsProps> = (props) => {
  return (
    <div
      className={
        "text-white w-[180px] px-8 py-4 stats stats_text_shadow flex flex-col items-center justify-center"
      }
    >
      <h2 className={"text-[32px] font-black"}>{props.value}</h2>
      <p>{props.title}</p>
    </div>
  );
};
