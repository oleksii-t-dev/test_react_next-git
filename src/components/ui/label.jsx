"use client";

import * as React from "react";

function Label({ className, ...props }) {
  return (
    <label
      className={`flex items-center gap-2 text-sm leading-none font-medium select-none text-gray-900 mb-[15px] ${className}`}
      {...props}
    />
  );
}

export { Label };
