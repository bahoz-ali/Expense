import "./App.css";
import ExpensePage from "./pages/expensePage/c.ExpensePage";

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Expense.</h1>
        <p>
          Expenditure is an outflow of money, or any form of fortune in general,
          to another person or group as payment for an item, service, or other
          category of costs.
        </p>
      </div>
      <ExpensePage />
    </div>
  );
}

export default App;
