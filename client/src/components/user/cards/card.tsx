"use client";
import React from "react";
import { CardProps } from "@/components/user/cards/type";
import { HistoryCard } from "@/components/user/cards/history.card";

export const UserCard: React.FC<CardProps> = (props) => {
  return (
    <>{props.variation === "history" ? <HistoryCard {...props} /> : null}</>
  );
};
