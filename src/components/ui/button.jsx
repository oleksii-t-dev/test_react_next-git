import React from "react";

const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="w-full md:w-auto mb-[70px] bg-black cursor-pointer text-white text-lg font-medium py-3 px-6 rounded-lg shadow-md transition-all 
      hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
    >
      {label}
    </button>
  );
};

export default Button;
