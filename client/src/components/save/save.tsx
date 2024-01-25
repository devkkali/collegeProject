"use client";
import React, { useState } from "react";
import { SaveProps } from "@/components/save/type";

export const Save: React.FC<SaveProps> = (props) => {
  const [edit, setEdit] = useState<boolean>(false);

  return (
    <div className={"w-full flex flex-row items-center justify-between"}>
      {props.children}
      <div
        className={
          "text-[16px] text-blue-500 cursor-pointer flex flex-row items-center justify-between gap-3.5 "
        }
      >
        {!edit && <p onClick={() => setEdit(!edit)}>Edit</p>}
        {edit && (
          <>
            <p className={"text-red-600"} onClick={() => setEdit(!edit)}>
              Cancel
            </p>
            <p onClick={props.onSave}>Save</p>
          </>
        )}
      </div>
    </div>
  );
};
