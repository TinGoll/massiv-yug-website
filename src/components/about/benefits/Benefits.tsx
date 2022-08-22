import React from "react";
import "./Benefits.scss";
import CardBenefits from "./CardBenefits";

const Benefits = () => {
  return (
    <div className='benefits' id='benefits'>
      <div className='title'>
        <h2 className='titleText' style={{ marginBottom: "20px" }}>
          Что <span>М</span>ы производим
        </h2>
        <p style={{ textAlign: "center" }}>
          Изделия из массива облагораживают интерьер за счет оригинальной и
          неповторимой древесной текстуры. <br /> В некоторых моделях возможно
          нанесение патины, окрашивание и другая отделка в зависимости от породы
          дерева
        </p>
      </div>

      <div className='content'>
        <CardBenefits
          img='/data/images/lestnicy.jpg'
          variant={1}
          title='Лестницы'
          text={`
                    Стильная конструкция из натурального дерева обеспечит вам безопасный подъем на 
                    верхние этажи и украсит собою интерьер вашего дома. 
            `}
          linkText='Перейти'
        />
        <CardBenefits
          img='/data/images/fasady.jpg'
          variant={2}
          title='Фасады'
          text={`
                        Большое количество моделей фасадного профиля (более 60 видов), 
                        который можно комбинировать с любой филенкой, 
                        тем самым увеличивая выбор.`}
          linkText='Перейти'
        />
        <CardBenefits
          img='/data/images/mebel.jpg'
          variant={3}
          title='Мебель'
          text={`Мы делаем всё. Любые нестандартные изделия. 
                    Мы изготавливаем под заказ мебель, двери, 
                    и любые другие изделия из массива.`}
          linkText='Перейти'
        />
      </div>
    </div>
  );
};

export default Benefits;
