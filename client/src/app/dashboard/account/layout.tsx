import React from "react";
import { TabContextProvider } from "@/components/tab/tab.context";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      className={
        "rounded-md shadow mt-6 p-[26px] w-full min-h-[500px] h-auto bg-white"
      }
    >
      <h2 className={"text-xl font-semibold mb-3 text-slate-800 "}>
        My Account
      </h2>
      <TabContextProvider>
        <div className={"w-full h-auto px-3.5 py-4"}>{children}</div>
      </TabContextProvider>
    </div>
  );
}
