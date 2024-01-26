"use client";
import React, { createContext, useContext, useEffect } from "react";
import { Tab } from "@/components/tab/tab";
import { usePathname } from "next/navigation";

const TabContext = createContext<undefined>(undefined);

export const TabContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const path = usePathname();
  return (
    <TabContext.Provider value={undefined}>
      <Tab
        option={[
          {
            active: path === "/dashboard/account/history",
            disabled: false,
            tabName: "Game History",
            pathName: "history",
          },
          {
            active: path === "/dashboard/account/details",
            disabled: false,
            tabName: "Details",
            pathName: "details",
          },
          {
            active: path === "/dashboard/account/security",
            disabled: false,
            tabName: "Security",
            pathName: "security",
          },
        ]}
      />
      {children}
    </TabContext.Provider>
  );
};
