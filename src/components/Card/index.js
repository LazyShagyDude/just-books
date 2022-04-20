import React from 'react';
import cardStyle from './Card.module.scss'

function Card({imgURL,name,price,onPlus}){
    const [isAdded,setIsAdded] = React.useState(false);

    const onClockPlus=()=>{
        onPlus({imgURL,name,price});
        setIsAdded(!isAdded);
    };
    return(
        <div className={cardStyle.card}>
            <img className={cardStyle.image} width={80} height={117} src={imgURL}></img>
            <h5>{name}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{price} руб.</b>
                    </div>
                    <img className={cardStyle.plus} onClick={onClockPlus} src={isAdded ? "/img/ok.svg" : "/img/plus.svg"}></img>
                </div>
        </div>);
}
export default Card;