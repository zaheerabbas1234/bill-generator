import React from "react";
import "./style/style.scss";

const clickHandle = (e) => {
  let item = e.target.className.split(" ")[2];
};

const App = () => {
  let bill = {
    Idly: [0, 0],
    Dosa: [0, 0],
    Vada: [0, 0],
    poori: [0, 0],
    gari: [0, 0],
    bajji: [0, 0],
    bonda: [0, 0],
    ravva: [0, 0],
    masala: [0, 0],
    pesarattu: [0, 0],
    Chapati: [0, 0],
    Parata: [0, 0],
    water: [0, 0],
    tea: [0, 0],
    coffee: [0, 0],
  };
  return (
    <section>
      <h1>Bill Generator</h1>
      <main>
        <div className="leftSection">
          <div className="buttons">
            <button className="tiffen item Idly">Idly</button>
            <button className="tiffen item Dosa">Dosa</button>
            <button className="tiffen item Vada">Vada</button>
            <button className="tiffen item poori">poori</button>
            <button className="tiffen item gari">gari</button>
            <button className="tiffen item bajji">bajji</button>
            <button className="tiffen item bonda">bonda</button>
            <button className="tiffen item ravva">ravva dosa</button>
            <button className="tiffen item masala">masala dosa</button>
            <button className="tiffen item pesarattu">pesarattu</button>
            <button className="tiffen item Chapati">Chapati</button>
            <button className="tiffen item Parata">Parata</button>
            <button className="tiffen item water">water bottle</button>
            <button className="tiffen item tea">tea</button>
            <button className="tiffen item coffee">coffee</button>
          </div>
          <button>Generate Bill</button>
          <div className="display"></div>
        </div>
        <div className="rightSection"></div>
      </main>
    </section>
  );
};

export default App;
