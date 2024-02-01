"use client";
import React from "react";
export const Info = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <p className={"mt-1 text-xs text-red-600"}>{children}</p>;
};
