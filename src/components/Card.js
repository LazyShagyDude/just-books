function Card(){
    return(
    <div className="card">
<img width={80} height={117} src="/img/books/book1.png"></img>
<h5>Мастер… без Маргариты</h5>
<div className="d-flex justify-between align-center">
<div className="d-flex flex-column">
    <span>Цена:</span>
    <b>636 руб.</b>
</div>
<button className="button">
    <img width={11} height={11} src="/img/plus.svg"></img>
</button>
</div>
</div>);
}
export default Card;