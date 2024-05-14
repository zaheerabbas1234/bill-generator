import React from "react";
import "./style/style.scss";
import priceData from "./assets/priceData.json";


const clickHandle = (e) => {
  let item = e.target.className.split(" ")[2];
  
  console.log(item);
};

const App = () => {
  return (
    <section>
      <h1>Bill Generator</h1>
      <main>
        <div className="leftSection">
          <div className="buttons">
            <button onClick={clickHandle} className="tiffen item Idly">
              Idly
            </button>
            <button onClick={clickHandle} className="tiffen item Dosa">
              Dosa
            </button>
            <button onClick={clickHandle} className="tiffen item Vada">
              Vada
            </button>
            <button onClick={clickHandle} className="tiffen item poori">
              poori
            </button>
            <button onClick={clickHandle} className="tiffen item gari">
              gari
            </button>
            <button onClick={clickHandle} className="tiffen item bajji">
              bajji
            </button>
            <button onClick={clickHandle} className="tiffen item bonda">
              bonda
            </button>
            <button onClick={clickHandle} className="tiffen item ravva">
              ravva dosa
            </button>
            <button onClick={clickHandle} className="tiffen item masala">
              masala dosa
            </button>
            <button onClick={clickHandle} className="tiffen item pesarattu">
              pesarattu
            </button>
            <button onClick={clickHandle} className="tiffen item Chapati">
              Chapati
            </button>
            <button onClick={clickHandle} className="tiffen item Parata">
              Parata
            </button>
            <button onClick={clickHandle} className="tiffen item water">
              water bottle
            </button>
            <button onClick={clickHandle} className="tiffen item tea">
              tea
            </button>
            <button onClick={clickHandle} className="tiffen item coffee">
              coffee
            </button>
          </div>
          <div className="display">
            <button>Generate Bill</button>
          </div>
        </div>
        <div className="rightSection"></div>
      </main>
    </section>
  );
};

export default App;
