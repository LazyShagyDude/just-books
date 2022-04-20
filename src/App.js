import React from "react";
import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

const arr =[
  {name:'Мастер… без Маргариты',price:'636',imgURL:'/img/books/book1.png',},
  {name:'Италия без купюр. ',price:'503',imgURL:'/img/books/book2.png',},
  {name:'Сокровенное таинство',price:'528',imgURL:'/img/books/book3.png',},
  {name:'Четвертый Кеннеди',price:'716',imgURL:'/img/books/book4.png',},
]

function App() {
  const [cartOp,setCartOp] = React.useState(false);
  const [cartItems, setCartItems] = React.useState([]);
  
  const onAddToCart=(onj)=>{
    setCartItems(prev => [... prev,onj])
  }


  return (
    <div className="wrapper clear">
      {cartOp && <Drawer items={cartItems} onClose = {() => setCartOp(false)}/>}
      <Header onClickCart = {() => setCartOp(true)}/>
      <div className="content p-40">
        <h1 className="mb-40">Просто Книги</h1>
          <div className="d-flex">
            {arr.map((obj)=>(
              <Card name={obj.name} price={obj.price} imgURL={obj.imgURL} onPlus={(onj)=> onAddToCart(onj)}/>
            ))}
          </div>
      </div>
    </div>
    );
}

export default App;
