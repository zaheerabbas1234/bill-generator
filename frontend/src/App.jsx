import "./style/style.scss";
import priceData from "./assets/priceData.json";

const clickHandle = (e) => {
  const itemName = e.target.className.split(" ")[2];
  console.log(itemName);
  if (priceData[itemName]) {
    priceData[itemName][0]++;
    generateBill();
    console.log(priceData[itemName]);
  } else {
    console.log("Item not found in priceData");
  }
};

const generateBill = () => {
  const billData = document.querySelector(".billData");
  billData.innerHTML = ""; // Clear previous content
  let totalPrice = 0;
  Object.entries(priceData).forEach(([item, data], index) => {
    const [count, price] = data;
    if (count > 0) {
      // Only add to bill if count is greater than 0
      const totalPriceForItem = count * price;
      totalPrice += totalPriceForItem;
      const row = `
        <tr key="">
          <td>${index + 1}</td>
          <td>${item}</td>
          <td>${priceData[item][0]}</td>
          <td>${priceData[item][1]}</td>
        </tr>`;
      billData.insertAdjacentHTML("beforeend", row);
    }
  });

  // Add the total row
  const totalRow = `
    <tr>
      <td></td>
      <td><strong>Total:</strong></td>
      <td></td>
      <td>${totalPrice}</td>
    </tr>`;
  billData.insertAdjacentHTML("beforeend", totalRow);
};

const App = () => {
  return (
    <section>
      <h1>Bill Generator</h1>
      <main>
        <div className="leftSection">
          <div className="buttons">
            {Object.entries(priceData).map(([item]) => (
              <button
                key={item}
                onClick={clickHandle}
                className={`tiffen item ${item}`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="display"></div>
        </div>
        <div className="rightSection">
          <table>
            <thead>
              <tr>
                <td>
                  <strong>S. No</strong>
                </td>
                <td>
                  <strong>Item Name</strong>
                </td>
                <td>
                  <strong>Quantity</strong>
                </td>
                <td>
                  <strong>price</strong>
                </td>
              </tr>
            </thead>
            <tbody className="billData"></tbody>
          </table>
        </div>
      </main>
    </section>
  );
};

export default App;
