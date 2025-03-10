import React from "react";

const Textarea = ({ label, ...props }) => {
  return (
    <div className="flex flex-col w-full">
      {label && (
        <label className="text-sm font-medium text-gray-600 mb-1">
          {label}
        </label>
      )}
      <textarea
        {...props}
        className="w-full border-b border-gray-400 outline-none focus:border-black text-lg py-1 resize-none"
      />
    </div>
  );
};

export default Textarea;
