import Card from "./components/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

function App() {
  return (
    <div className="wrapper clear">
      <Drawer/>
      <Header/>
      <div className="content p-40">
        <h1 className="mb-40">Просто Книги</h1>
        <div className="d-flex">
        <Card/>
        <div className="card">
          <img width={80} height={117} src="/img/books/book2.png"></img>
          <h5>Италия без купюр.</h5>
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
