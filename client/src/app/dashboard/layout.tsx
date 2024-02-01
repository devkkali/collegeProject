import React from "react";
import { Header } from "@/components/header/header";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className={"px-[26px]"}>{children}</main>
    </>
  );
}
