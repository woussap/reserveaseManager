import React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({ label, options, error, className = "", ...props }) => {
  return (
    <div className={className}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <div className="relative">
        <select
          className={`
            block w-full rounded-md border-gray-300 shadow-sm
            focus:border-emerald-500 focus:ring-emerald-500 sm:text-sm
            appearance-none bg-none pr-10
            ${error ? "border-red-300" : "border-gray-300"}
          `}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
          <ChevronDown className="h-5 w-5 text-gray-400" />
        </div>
      </div>
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
};

export default Select;
