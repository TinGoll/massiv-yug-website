import React from "react";
import "./CardBenefits.scss";

interface CardBenefitsProbs {
  variant?: 1 | 2 | 3;
  href?: string;
  img: string;
  alt?: string;
  title: string;
  text: string;
  linkText: string;
}

const variants: string[] = ["card-1", "card-2", "card-3"];

const CardBenefits: React.FC<CardBenefitsProbs> = ({
  img,
  alt = "img",
  title,
  text,
  linkText,
  variant = 1,
  href = "#banner",
}) => {
  return (
    <div
      className={`card ${
        variants[variant - 1 > 2 || variant - 1 < 0 ? 0 : variant - 1]
      }`}
    >
      <div className='card-header'>
        <img src={img} alt={alt} className='card-img' />
      </div>
      <div className='card-body'>
        <h2 className='card-title'>{title}</h2>
        <p className='card-text'>{text}</p>
      </div>
      <div className='card-footer'>
        <a href={href}>{linkText}</a>
      </div>
    </div>
  );
};

export default CardBenefits;
