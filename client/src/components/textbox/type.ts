import React from "react";

export interface TextBoxInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  isLoading?: boolean;
}
export interface TextBoxProps extends TextBoxInputProps {
  variation: "standard" | "password";
  label?: string;
  onSave: (data: { key?: string; value?: string | number | null }) => void;
}
