"use client";

import { useState, useEffect } from "react";
import BicolorCircle from "./BicolorCircle";
import { THEME } from "../common/constants";
import { setStyleProperty } from "../common/utils";

function Dropdown() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [theme, setTheme] = useState("theme0");

  useEffect(() => {
    const storedTheme = localStorage.getItem("--yulei-theme");
    if (storedTheme) {
      setStyleProperty(storedTheme);
      setTheme(storedTheme);
    }
  }, []);

  const handleThemeChange = (newTheme) => {
    setStyleProperty(newTheme);
    setTheme(newTheme);
    localStorage.setItem("--yulei-theme", newTheme);
  };

  return (
    <div
      className="flex flex-col items-center"
      tabIndex={0}
      onBlur={() => setDropdownVisible(false)}
    >
      <BicolorCircle
        from="brand-2"
        to="brand-1"
        onClick={() => setDropdownVisible((prev) => !prev)}
      />
      {dropdownVisible && (
        <ul>
          <DropdownItem
            value="theme0"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme1"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme2"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme3"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme4"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme5"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme6"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme7"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme8"
            theme={theme}
            onChange={handleThemeChange}
          />
          <DropdownItem
            value="theme9"
            theme={theme}
            onChange={handleThemeChange}
          />
        </ul>
      )}
    </div>
  );
}

function DropdownItem({ value, theme, onChange }) {
  const changeTheme = () => {
    onChange(value);
  };

  return (
    <div className="flex items-center justify-center">
      <BicolorCircle
        from={THEME[value].brand2}
        to={THEME[value].brand1}
        onClick={changeTheme}
      />

      <input
        className="appearance-none z-[-1] absolute h-2full w-2full rounded-full scale-0
          checked:animate-scale
          bg-gradient-to-r from-brand-1 from-50% to-brand-2 to-50%"
        checked={value === theme}
        type="radio"
      />
    </div>
  );
}

export default Dropdown;
