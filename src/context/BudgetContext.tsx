import { useReducer, createContext, Dispatch, ReactNode } from "react"
import { BudgetActions, budgetReducer, BudgetState, initialState } from "../reducers/budget-reducers"

type BudgetContextProps = {
    state: BudgetState
    dispatch: Dispatch<BudgetActions>
}

type BudgetProviderProps = {
    children: ReactNode
}

// El context es para generar el ámbito de aplicación de nuestro provider
export const BudgetContext = createContext<BudgetContextProps>({} as BudgetContextProps) // para quitar el error, tb se puede pasar como argumento (null!)


// El provider indica de donde vienen los datos y funciones
export const BudgetProvider = ({children}: BudgetProviderProps) =>{

    const [state, dispatch] = useReducer(budgetReducer, initialState)

    return (
        <BudgetContext.Provider
            value={{
                state,
                dispatch
            }}
        >
            {children}
        </BudgetContext.Provider>
    )
}