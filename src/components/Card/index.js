import cardStyle from './Card.module.scss'

function Card(props){
    return(
        <div className={cardStyle.card}>
            <img className={cardStyle.image} width={80} height={117} src={props.imgURL}></img>
            <h5>{props.name}</h5>
                <div className="d-flex justify-between align-center">
                    <div className="d-flex flex-column">
                        <span>Цена:</span>
                        <b>{props.price} руб.</b>
                    </div>
                    <button className="button">
                    <img width={11} height={11} src="/img/plus.svg"></img>
                    </button>
                </div>
        </div>);
}
export default Card;