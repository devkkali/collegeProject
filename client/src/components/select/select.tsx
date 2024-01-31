import React from "react";
import { SelectProps, SelectStandard } from "@/components/select";
import { SelectEdit } from "@/components/select/select.edit";

export const Select: React.FC<SelectProps> = (props) => {
  return (
    <div className={"w-full flex flex-col gap-0"}>
      <label className={"text-sm font-medium text-slate-600 "}>
        {props.label}
      </label>
      {props.variation === "standard" ? (
        <SelectStandard {...props} />
      ) : props.variation === "edit" ? (
        <SelectEdit {...props} />
      ) : null}
      {props.isError && (
        <p className={"mt-1 text-xs text-red-600"}>
          {props.errorMessage || "Password Wrong"}
        </p>
      )}
    </div>
  );
};
