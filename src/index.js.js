import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

import Item from "./components/item";
import Header from "./components/header";
import Archived from "./components/archived";

import "./styles.css";

const transactionsData = [
  { name: "Mortgage", amount: "-$1123" },
  { name: "New Macbook M1 Air", amount: "-$1500" },
  { name: "Audi Car Payments", amount: "-$500" },
  { name: "Salary", amount: "+$4000" }
];

function App() {
  const [count, setCount] = useState(0);
  const [txnData, setTxnData] = useState([]);
  const [archivedData, setArchivedData] = useState([]);
  // const count = (value) => setCount(value);

  useEffect(() => {
    console.log("HELLO");
    setTxnData(transactionsData);
  }, []);

  const deleteTransaction = (deletedData) => {
    setTxnData(txnData.filter((data) => data.name !== deletedData.name));
    setArchivedData([...archivedData, deletedData]);
  };
  const data = { key: "Welcome to Bottomline!" };

  return (
    <div className="App">
      <Header text="Welcome to Bottomline" />
      <h2>You clicked {count} times!</h2>
      <hr />
      <br />
      <h2>Transactions</h2>
      {/* transactions */}
      <ul>
        {txnData.map((data) => (
          <li key={data.name}>
            <span>{data.name}</span>
            <span>{data.amount}</span>
            <button onClick={() => deleteTransaction(data)}>Delete</button>
          </li>
        ))}
      </ul>
      <hr />
      <br />
      <Archived items={archivedData} />
      <br />
      <hr />
      <br />
      <Item data={data} />
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
