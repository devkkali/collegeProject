import { IconEye, IconEyeOff } from "@tabler/icons-react";
import { useState } from "react";

function Label({ className, ...props }) {
  return (
    <label
      {...props}
      className="font-medium text-sm [0.8175rem] text-gray-700 select-none"
    />
  );
}
function Input({ className, ...props }) {
  return (
    <input
      {...props}
      className={`border-b-2 w-full border-b-gray-300 focus:border-b-primary-600 py-2 text-sm focus:outline-none ${className}`}
    />
  );
}

function PasswordInput({ className, type = "text", ...props }) {
  const [show, setShow] = useState(type === "text");
  return (
    <div className="relative">
      <input
        {...props}
        type={show ? "text" : "password"}
        className={`border-b-2 w-full pr-8 border-b-gray-300 focus:border-b-primary-600 py-2 text-sm focus:outline-none ${className}`}
      />
      <span
        onClick={() => setShow((old) => !old)}
        className="absolute select-none top-3 right-2 text-gray-500 hover:text-gray-600 cursor-pointer">
        {show ? (
          <IconEye className="h-4 w-4" />
        ) : (
          <IconEyeOff className="h-4 w-4" />
        )}
      </span>
    </div>
  );
}

export { Input, PasswordInput, Label };
