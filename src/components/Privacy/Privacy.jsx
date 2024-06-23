import React from "react";

export const Privacy = () => {
  return (
    <div className=" flex flex-col gap-4 text-[14px]   py-10 md:flex-row md:items-center md:justify-between">
      <span className="text-center">© 2024 Cowork. All rights reserved.</span>
      <ul className="flex justify-between md:gap-4 text-[14px] underline">
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookies Settings</li>
      </ul>
    </div>
  );
};
