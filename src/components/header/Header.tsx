import React from "react";
import "./Header.scss";

import Logo from "./Logo";
import Nav from "./Nav";

interface HeaderProbs {
  stickyForced?: boolean;
}

const Header: React.FC<HeaderProbs> = ({ stickyForced = false }) => {
  const [sticky, setSticky] = React.useState<boolean>(false);
  const [isActive, setActive] = React.useState<boolean>(false);

  React.useEffect(() => {
    document.addEventListener("scroll", scrollHandler);
    return () => {
      document.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  const scrollHandler = (e: any) => {
    // const containerHeight = e.target.documentElement.scrollHeight; // Общая высота всей страници
    // const windowHeight = window.innerHeight; // Видимая область
    const scrollTop = e.target.documentElement.scrollTop; // Позиция скрола с от верха

    if (scrollTop > 0) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  return (
    <header className={`${sticky || stickyForced ? "sticky" : ""}`}>
      <Logo />
      <Nav isActive={isActive} toggle={setActive} />
    </header>
  );
};

export default Header;
