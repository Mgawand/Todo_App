// import React from "react";
import setThemeToLight from "../images/icon-sun.svg";
import setThemeToDark from "../images/icon-moon.svg";

const Header = ({ themeLight, setThemeLight }) => {
  const switchThemeIcon = themeLight ? setThemeToDark : setThemeToLight;

  const switchTheme = () => {
    setThemeLight(!themeLight);
  };

  return (
    <header>
      <h1>TODO</h1>
      <button className="btn " onClick={switchTheme}>
        <img src={switchThemeIcon} alt="Light Theme" />
      </button>
    </header>
  );
};

export default Header;
