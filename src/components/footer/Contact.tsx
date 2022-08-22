import React from "react";

const Footer = () => {
  return (
    <section className='contact' id='contact'>
      <div className='title'>
        <h2 className='titleText'>
          <span>К</span>онтакты
        </h2>
        <p>Что бы качественно вас заспамить, дайте нам свои конаткты.</p>
      </div>
      <div className='contactForm'>
        <h3>Отправить сообщение</h3>
        <div className='inputBox'>
          <input type='text' placeholder='Ваше имя' />
        </div>
        <div className='inputBox'>
          <input type='text' placeholder='Email' />
        </div>
        <div className='inputBox'>
          <textarea placeholder='Сообщение.'></textarea>
        </div>
        <div className='inputBox'>
          <input type='submit' value='Отправить' />
        </div>
      </div>
    </section>
  );
};

export default Footer;
