import React from "react";
import "./Gallery.scss";
import ImmageBox from "./ImmageBox";

const productionData = [
  {
    url: "Фасад__0000_Флора.jpg",
    text: "Фасад Флора",
  },
  {
    url: "Фасад__0001_Флоренция.jpg",
    text: "Фасад Флоренция",
  },
  {
    url: "Фасад__0002_Жалюзи.jpg",
    text: "Фасад Жалюзи",
  },
  {
    url: "Фасад__0003_Портофино.jpg",
    text: "Фасад Портофино",
  },
  {
    url: "Фасад__0008_Модерн.jpg",
    text: "Фасад Модерн",
  },
  {
    url: "Фасад__0009_Классика.jpg",
    text: "Фасад Классика",
  },
  {
    url: "Фасад__0015_Натали.jpg",
    text: "Фасад Натали",
  },
  {
    url: "Фасад__0016_Саида.jpg",
    text: "Фасад Саида",
  },
  {
    url: "Фасад__0036_Мари.jpg",
    text: "Фасад Мари",
  },
];

const indexGenerator = (count: number, min: number, max: number) => {
  let totalNumbers = max - min + 1;
  let arrayTotalNumbers: number[] = [];
  let arrayRandomNumbers: number[] = [];
  let resArray: number[] = [];

  let tempRandomNumber: number;

  while (totalNumbers--) {
    arrayTotalNumbers.push(totalNumbers + min);
  }

  while (arrayTotalNumbers.length) {
    tempRandomNumber = Math.round(
      Math.random() * (arrayTotalNumbers.length - 1)
    );
    arrayRandomNumbers.push(arrayTotalNumbers[tempRandomNumber]);
    arrayTotalNumbers.splice(tempRandomNumber, 1);
  }

  while (count--) {
    const index = Math.round(Math.random() * (arrayRandomNumbers.length - 1));
    const num = arrayRandomNumbers[index];
    arrayRandomNumbers.splice(index, 1);
    resArray.push(num);
  }
  return resArray;
};

//  Нужно учесть что в диапазоне участвуют и минимальное и максимальное число
//  тоесть если задать (0, 100) то на выходе получим массив из 101-го числа
//  от 1 до 100 и плюс число 0

const Gallery = () => {
  const [pIndex, setPIndex] = React.useState<number[]>([]);

  React.useEffect(() => {
    const indexes = indexGenerator(6, 0, productionData.length - 1);
    setPIndex([...indexes]);
  }, []);

  return (
    <section className='menu' id='menu'>
      <div className='title'>
        <h2 className='titleText'>
          Наша <span>П</span>родукция
        </h2>
        <p>
          Натуральный природный материал с минимальной обработкой. Не вызывает
          аллергию, безопасен в доме, где есть дети и животные.
        </p>
      </div>
      <div className='content'>
        {pIndex
          .map((p) => productionData[p])
          .map((photo, index) => (
            <ImmageBox
              key={index}
              src={`/data/images/${photo.url}`}
              text={photo.text}
              alt={`img_${index}`}
              onClick={() => console.log("Клик:" + index)}
            />
          ))}
        <div className='title'></div>
        <div>
          <a href='#banner' className='btn'>
            Больше моделей
          </a>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
