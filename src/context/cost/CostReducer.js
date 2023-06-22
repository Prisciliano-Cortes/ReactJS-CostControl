import { typesCost } from "../../utils/typesState";

export const CostReducer = (state, action) => {
    switch (action.type) {
        case typesCost.EXPENSE_TOTAL:
            return {
                ...state,
                expensesTotal: action.payload,
            }

        case typesCost.INCOME_TOTAL:
            return {
                ...state,
                incomeTotal: action.payload,
            }
        
        case typesCost.BALANCE_MONTH:
            return {
                ...state,
                monthBalance: action.payload
            }

        case typesCost.TRANSACTION_MONTH: 
            return {
                ...state,
                transactions: action.payload
            }

        case typesCost.GET_MONTH:
            return {
                ...state,
                month: action.payload
            }
    
        default:
            return state
    }
}