import React from "react";
import "./Banner.scss";

const Baner = () => {
  return (
    <section className='banner' id='banner'>
      <div className='content'>
        <h2>Каждый следующий продукт дороже.</h2>
        <p>
          Подпишитесь на нашу рассылку и получите книгу «Как правильно делать
          рассылку».
          <br />
          Прочитайте, почему вам понравится
        </p>
        <a href='#contactUs' className='btn'>
          Подписаться
        </a>
      </div>
    </section>
  );
};
export default Baner;
