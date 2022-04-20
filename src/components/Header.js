function Header(props){
    return(
    <header className="d-flex justify-between align-center p-40">
<div className="d-flex align-center">
<img width={50} height={50} src="/img/logo.png"></img>
<div>
  <h3 className="text-uppercase">Just Books</h3>
  <p className="opacity-5">Просто магазин книг</p>
</div>
</div>
<ul className="d-flex">
  <li className="mr-30">
  <img onClick={props.onClickCart} className="cu-p" width={18} height={18} src="/img/cart.svg"></img>
    <span>0 руб.</span>
  </li>
  <li>
  <img className="cu-p" width={18} height={18} src="/img/user.svg"></img>
  </li>
</ul>
</header>
    )
}

export default Header;
