import React from "react";

interface NavProbs {
  isActive: boolean;
  toggle: (flag: boolean) => void;
}

const Nav: React.FC<NavProbs> = ({ isActive, toggle }) => {
  return (
    <nav>
      <div
        className={`menuToggle ${isActive ? "active" : ""}`}
        onClick={() => toggle(!isActive)}
      ></div>
      <ul className={`navigation ${isActive ? "active" : ""}`}>
        <li>
          <a href='#banner' onClick={() => toggle(!isActive)}>
            Главная
          </a>
        </li>
        <li>
          <a href='#about' onClick={() => toggle(!isActive)}>
            О компании
          </a>
        </li>
        <li>
          <a href='#product' onClick={() => toggle(!isActive)}>
            Продукция
          </a>
        </li>
        <li>
          <a href='#menu' onClick={() => toggle(!isActive)}>
            Наши работы
          </a>
        </li>
        <li>
          <a href='#contactUs' onClick={() => toggle(!isActive)}>
            Контакты
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
