"use client";

import { useState } from "react";

export default function FooterForm() {
  const [formData, setFormData] = useState({
    email: "",
  });

  return (
    <div className="col-span-full md:col-span-1 w-full min-w-[290px] md:max-w-[auto] footer-form-bg p-[15px] rounded-xl relative lg:top-[-15px] h-[175px] md:h-[190px]">
      <h3 className="text-lg font-bold mb-4">Join Our Newsletter</h3>
      <form className="flex flex-col space-y-3">
        <div className="flex w-full">
          <input
            type="email"
            placeholder="Your email address"
            className="w-[160px] px-3 py-2 bg-[#1e1e1e] border-none text-white focus:outline-none flex-1 rounded-l"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
          />
          <button
            type="submit"
            className="px-3 py-2 bg-black hover:bg-gray-800 rounded-r cursor-pointer"
          >
            Subscribe
          </button>
        </div>
        <p className="manrope text-sm mb-4 opacity-50">
          * Will send you weekly updates for your better tool management.
        </p>
      </form>
    </div>
  );
}
