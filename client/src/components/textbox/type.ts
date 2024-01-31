import React from "react";

export interface TextBoxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
  label?: string;
  errormessage?: string;
  onSave?: (data: { key?: string; value?: string | number | null }) => void;
  link?: {
    name: string;
    path: string;
  };
}
export interface TextBoxProps extends TextBoxInputProps {
  variation: "standard" | "password" | "standard-edit" | "date";
}
