import { SelectHTMLAttributes } from "react";

export interface SelectMainProps
  extends SelectHTMLAttributes<HTMLSelectElement> {
  option?: {
    label: string;
    id: string;
  }[];
  isLoading?: boolean;
  innerLabel?: string;
}

export interface SelectProps extends SelectMainProps {
  variation: "standard" | "outlined" | "edit";
  label: string;
  isError?: boolean;
  errorMessage?: string;
}
