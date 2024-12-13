import { useMemo } from "react";
import { useBudget } from "../hooks/useBudget";
import ExpenseDetail from "./ExpenseDetail";

function ExpenseList() {
  const { state } = useBudget();

  const filteredExpenses = state.currentCategory
    ? state.expenses.filter(
        (expense) => expense.category === state.currentCategory
      )
    : state.expenses;

  const isEmpty = useMemo(
    () => filteredExpenses.length === 0,
    [state.expenses]
  );

  return (
    <div className="bg-white shadow-lg rounded-lg p-10 mt-10">
      {isEmpty ? (
        <p className="text-gray-600 text-2xl font-bold">No hay Gastos</p>
      ) : (
        <>
          <p className="text-gray-600 text-2xl font-bold my-5">
            Lista de Gastos
          </p>
          <p className="my-5">
            Desliza hacia la izquierda para borrar o a la derecha para actualizar
          </p>
          {filteredExpenses.map((expense) => (
            <ExpenseDetail key={expense.id} expense={expense} />
          ))}
        </>
      )}
    </div>
  );
}

export default ExpenseList;
