import React, { useState } from "react";

const RadioGroup = ({ label, options, name, defaultValue, onChange }) => {
  const [selected, setSelected] = useState(defaultValue || options[0].value);

  const handleChange = (value) => {
    setSelected(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <div className="flex flex-col w-full mt-6">
      {label && (
        <label className="font-medium text-gray-900 mb-3">{label}</label>
      )}
      <div className="flex flex-wrap items-center gap-4">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={selected === option.value}
              onChange={() => handleChange(option.value)}
              className="hidden"
            />
            <div
              className={`w-4 h-4 border-2 rounded-full flex items-center justify-center transition-all ${
                selected === option.value
                  ? "bg-black border-black text-white"
                  : "border-white bg-[#E0E0E0]"
              }`}
            >
              {selected === option.value && (
                <span className="text-white text-xs">✔</span>
              )}
            </div>
            <span className="text-gray-700 text-sm">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
