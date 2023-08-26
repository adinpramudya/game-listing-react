import React, { useContext, useEffect, useState } from "react";
import logo from "./../assets/Images/logo.png";
import { HiMoon, HiOutlineMagnifyingGlass, HiSun } from "react-icons/hi2";
import { ThemeContext } from "../Context/ThemeContext";
function Header() {
  const [toggle, setToggle] = useState(true);
  const { theme, setTheme } = useContext(ThemeContext);

  useEffect(() => {
    console.log("Theme", theme);
  });
  return (
    <div className="flex items-center p-3">
      <img src={logo} width={60} height={60} />

      <div className="flex bg-slate-200 p-2 w-full items-center rounded-full mx-5">
        <HiOutlineMagnifyingGlass />
        <input
          type="text"
          placeholder="Search Games"
          className="bg-transparent outline-none px-2 w-full"
        />
      </div>
      {theme == "light" ? (
        <HiMoon
          className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          onClick={() => {
            setTheme("dark");
            localStorage.setItem("theme", "dark");
          }}
        />
      ) : (
        <HiSun
          className="text-[35px] bg-slate-200 text-black p-1 rounded-full cursor-pointer"
          onClick={() => {
            setTheme("light");
            localStorage.setItem("theme", "light");
          }}
        />
      )}
    </div>
  );
}

export default Header;
