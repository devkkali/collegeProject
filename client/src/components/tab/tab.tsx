"use client";
import React from "react";
import { TabProps } from "@/components/tab";
import Link from "next/link";

export const Tab: React.FC<TabProps> = (props) => {
  return (
    <div
      className={
        "flex flex-row items-center justify-between gap-3.5 rounded w-fit p-1.5 h-fit bg-blue-100/50"
      }
    >
      {props.option.map((value, index) => (
        <Link
          className={`${
            value.active ? "bg-blue-700 text-white" : "bg-none text-blue-600"
          } rounded py-1.5 px-4 text-sm font-medium`}
          key={index}
          href={value.pathName}
        >
          {value.tabName}
        </Link>
      ))}
    </div>
  );
};
