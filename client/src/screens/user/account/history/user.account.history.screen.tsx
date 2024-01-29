"use client";
import { Stats } from "@/components/stats/stats";

export const UserAccountHistoryScreen = () => {
  return (
    <div className={"w-full"}>
      <div className={"flex flex-row items-center justify-start gap-2"}>
        <Stats title={"Total Score"} value={"20"} />
        <Stats title={"Total Match"} value={"20"} />
      </div>
    </div>
  );
};
