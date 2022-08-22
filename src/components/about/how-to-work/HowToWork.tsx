import React from "react";
import "./HowToWork.scss";

const HowToWork = () => {
  return (
    <div className='how-to-work'>
      <div className='title'>
        <h2 className='titleText' style={{ marginBottom: "20px" }}>
          Как с <span>Н</span>ами работать.
        </h2>
      </div>
      <div className='container'>
        <div className='hexagon'>
          <div className='shape'>
            <img src='/data/images/ceh.jpg' alt='img' />
            <div className='content-0'>
              <h2>Приехать на экскурсию</h2>
            </div>
            <div className='content variant-1'>
              <div>
                <p>
                  У нас вы сможете посмотреть вживую на одно из крупнейших на
                  Юге России производств мебельных фасадов из массива.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='hexagon'>
          <div className='shape'>
            <img src='/data/images/obrazcy.jpg' alt='img' />
            <div className='content-0'>
              <h2>Заказать образцы</h2>
            </div>
            <div className='content variant-2'>
              <div>
                <p>
                  У нас вы сможете посмотреть вживую на одно из крупнейших на
                  Юге России производств мебельных фасадов из массива.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='hexagon'>
          <div className='shape'>
            <img src='/data/images/pokupka-mebeli.jpg' alt='img' />
            <div className='content-0'>
              <h2>Сделать первый заказ</h2>
            </div>
            <div className='content variant-3'>
              <div>
                <p>
                  У нас вы сможете посмотреть вживую на одно из крупнейших на
                  Юге России производств мебельных фасадов из массива.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToWork;
