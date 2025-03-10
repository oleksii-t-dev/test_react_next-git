import React from "react";

const Input = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
      <input
        {...props}
        className="w-full border-b border-gray-400 outline-none focus:border-black text-lg py-1"
      />
    </div>
  );
};

export default Input;
