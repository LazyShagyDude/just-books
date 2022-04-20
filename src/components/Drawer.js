function Drawer({onClose, items=[]}){
    return(
    <div className="overlay">
    <div className="drawer">
      <h2 className="mb-15 d-flex justify-between">Корзина 
      <img onClick={onClose} className="removeBtn cu-p" src="/img/delete.svg"></img>
      </h2>
      <div className="items">
        {items.map((obj)=>(
                <div className="cartItem d-flex align-center mb-20">
                <img className="mr-20" src={obj.imgURL}></img>
                <div className="mr-20">
                  <p className="mb-5">{obj.name}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img className="removeBtn" src="/img/delete.svg"></img>
              </div>
        ))}
      </div>
      <ul className="cartTotalBlock">
        <li className="d-flex">
          <span>Итого:</span>
          <div></div>
          <b>0 руб.</b>
        </li>
      </ul>
      <button className="order">Оформить заказ</button>
    </div>
  </div> )
}

export default Drawer;