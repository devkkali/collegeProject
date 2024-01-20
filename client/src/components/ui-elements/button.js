export default function Button({ className, variant = "primary", ...props }) {
  return (
    <button
      {...props}
      className={`px-4 py-2 h-9 text-sm font-medium rounded-md shadow-sm transition ${variant === "primary" ? "bg-primary-600 hover:bg-primary-500 text-white" : variant === "outline" ? "border border-gray-200 text-gray-800 bg-white hover:bg-gray-50" : ""} ${className}`}
    />
  );
}
