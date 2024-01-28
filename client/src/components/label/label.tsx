"use client";
import React from "react";

export const Label = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <label className={"text-sm font-medium text-slate-600 "}>{children}</label>
  );
};
