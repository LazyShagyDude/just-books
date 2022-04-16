function App() {
  return (
    <div className="App clear">
      <header className="d-flex justify-between align-center">
        <div className="d-flex align-center">
        <img width={50} height={50} src="/img/logo.png"></img>
        <div>
          <h3 className="text-uppercase">Just Books</h3>
          <p>Просто магазин книг</p>
        </div>
        </div>
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg"></img>
            <span>0 руб.</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg"></img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1 className="mb-40">Просто Книги</h1>
        <div className="d-flex">
        <div className="card">
          <img src="/img/like-off.svg"></img>
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
        </div>
        <div className="card">
          <img width={80} height={117} src="/img/books/book2.png"></img>
          <h5>Италия без купюр. Исследование итальянского сердца</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>503 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={80} height={117} src="/img/books/book3.png"></img>
          <h5>Сокровенное таинство</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>528 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={80} height={117} src="/img/books/book4.png"></img>
          <h5>Четвертый Кеннеди</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Цена:</span>
              <b>716 руб.</b>
            </div>
            <button className="button">
              <img width={11} height={11} src="/img/plus.svg"></img>
            </button>
          </div>
        </div>
      </div>
        </div>
    </div>
    );
}

export default App;
