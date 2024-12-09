import Header from "./components/Header";
import BudgetForm from "./components/BudgetForm";


function App() {
  

  return (
    <>
      <Header />

      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg mt-10 p-10">
        <BudgetForm />
      </div>
    </>
  );
}

export default App;
