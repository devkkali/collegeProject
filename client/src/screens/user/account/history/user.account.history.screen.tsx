"use client";
import { Stats } from "@/components/stats/stats";
import { UserCard } from "@/components/user/cards/card";

export const UserAccountHistoryScreen = () => {
  return (
    <div className={"w-full flex flex-col gap-4 "}>
      <div className={"flex flex-row items-center justify-start gap-4"}>
        <Stats title={"Total Score"} value={"20"} />
        <Stats title={"Total Match"} value={"20"} />
      </div>
      <UserCard variation={"history"} />
      <UserCard variation={"history"} />
      <UserCard variation={"history"} />
      <UserCard variation={"history"} />
      <UserCard variation={"history"} />
      <UserCard variation={"history"} />
    </div>
  );
};
