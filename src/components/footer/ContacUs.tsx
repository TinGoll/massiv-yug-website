import React from "react";
import "./ContacUs.scss";
import {
  AiFillEnvironment,
  AiTwotonePhone,
  AiTwotoneMail,
} from "react-icons/ai";

const ContacUs = () => {
  return (
    <section className='contactUs' id='contactUs'>
      <footer>
        <div className='title'>
          <h2>Напишите нам</h2>
        </div>
        <div className='box'>
          <div className='contact2 form'>
            <h3>Отправить сообщение</h3>
            <form>
              <div className='formBox'>
                <div className='row50'>
                  <div className='inputBox'>
                    {/* <span>Ваше имя</span> */}
                    <input type='text' placeholder='Имя' />
                  </div>
                  <div className='inputBox'>
                    {/* <span>Отчество</span> */}
                    <input type='text' placeholder='Отчество' />
                  </div>
                </div>

                <div className='row50'>
                  <div className='inputBox'>
                    {/* <span>E-mail</span> */}
                    <input type='text' placeholder='Почта' />
                  </div>
                  <div className='inputBox'>
                    {/* <span>Телефон</span> */}
                    <input type='text' placeholder='Телефон' />
                  </div>
                </div>

                <div className='row100'>
                  <div className='inputBox'>
                    {/* <span>Сообщение</span> */}
                    <textarea placeholder='Ваше сообщение'></textarea>
                  </div>
                </div>

                <div className='row100'>
                  <div className='inputBox'>
                    <input type='submit' value='Отправить' />
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className='contact2 info'>
            <h3>Контакты</h3>
            <div className='infoBox'>
              <div>
                <span>
                  <AiFillEnvironment size={18} />
                </span>
                <p>Республика Адыгея, ст. Кужорская, ул. Лесная, д.6;</p>
              </div>

              <div>
                <span>
                  <AiTwotoneMail size={18} />
                </span>
                <a href='mailto:i.p.Solovyov@yandex.ru'>
                  i.p.solovyov@yandex.ru.
                </a>
              </div>
              <div>
                <span>
                  <AiTwotonePhone size={18} />
                </span>
                <a href='tel:+79880819555'>+7-988-081-95-55</a>
              </div>
            </div>
          </div>
          <div className='contact2 map'>
            <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2838.251923328153!2d40.294502915530465!3d44.6532043790997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40f7364db5510541%3A0xf31ea53c75387ea7!2z0YPQuy4g0JvQtdGB0L3QsNGPLCA2LCDQmtGD0LbQvtGA0YHQutCw0Y8sINCg0LXRgdC_0YPQsdC70LjQutCwINCQ0LTRi9Cz0LXRjywgMzg1NzY1!5e0!3m2!1sru!2sru!4v1661187462444!5m2!1sru!2sru'
              loading='lazy'
            ></iframe>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default ContacUs;
