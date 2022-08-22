import React from 'react'

interface ImmageBoxProbs {
    src: string;
    text: string;
    alt?: string
    onClick?: () => void
}

const ImmageBox: React.FC<ImmageBoxProbs> = ({ src, alt, text, onClick }) => {
    return (

        <div className="box" onClick={onClick}>
            <div className="imgBx">
                <img src={src} alt={alt || src} />
            </div>
            <div className="text">
                <h3>{text}</h3>
            </div>
        </div>
    )
}

export default ImmageBox