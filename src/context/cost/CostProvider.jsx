import { useReducer } from "react";
import Swal from "sweetalert2";
import { CostContext } from "./CostContext"
import { CostReducer } from "./CostReducer";
import transactionApi from "../../api/transactionApi";
import { initialState } from "../../utils/initialState";
import { typesCost, typesTransaction } from "../../utils/typesState";

export const CostProvider = ({ children }) => {

    const [state, dispatch] = useReducer(CostReducer, initialState);

    const getMonth = async( month ) => {

        try {
            const { data } = await transactionApi.get('/transaction')

            const transactions = data.transactions.filter( item => item.month === month )

            //*** Check expenses and total */
            const expenses = transactions.filter( ({ types }) => types === typesTransaction.EXPENSES )
            const totalExpenses = expenses.reduce((accumulator, { quantity }) => accumulator + quantity, 0);

            //*** Check income and total */
            const income = transactions.filter( ({ types }) => types === typesTransaction.INCOME )
            const totalIncome = income.reduce((accumulator, { quantity }) => accumulator + quantity, 0);

            //*** Check balance for month */
            const balanceMonth = totalExpenses - totalIncome

            const reduceBalance = balanceMonth.toFixed(2)

            await getMonthByDay( month, data )

            dispatch({ type: typesCost.EXPENSE_TOTAL, payload: totalExpenses })
            dispatch({ type: typesCost.INCOME_TOTAL, payload: totalIncome })
            dispatch({ type: typesCost.BALANCE_MONTH, payload: reduceBalance })
            
        } catch (error) {
            console.log(error)
        }
    }

    const getMonthByDay = async(month, database ) => {
        const dayMonth = database.transactions;

        const monthTransactions = dayMonth.filter(entry => entry.month === month );
        const transactionsByDay = {};
  
        monthTransactions.forEach(entry => {
            const day = entry.day;

            if (transactionsByDay[day]) {
                transactionsByDay[day].push(entry);
            } else {
                transactionsByDay[day] = [entry];
            }
        });

        dispatch({ type: typesCost.TRANSACTION_MONTH, payload: transactionsByDay })
        dispatch({ type: typesCost.GET_MONTH, payload: month })
    }

    const addNewTransaction = async( {month, day, typeTransaction, addressee, quantity, resume } ) => {
        try {
            let color;

            if ( typeTransaction === typesTransaction.EXPENSES ) color = 'danger'

            if (typeTransaction === typesTransaction.INCOME ) color = 'success'

            const types = typeTransaction

            const days = parseInt(day)
            const price = parseFloat(quantity)

            const values = {
                month,
                day: days,
                types,
                quantity: price,
                addressee,
                color,
                resume
            }

            await transactionApi.post('/transaction', values)

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
            Toast.fire({
                icon: 'success',
                title: 'Transacción creada'
            })
        } catch (error) {
            console.log(error)

            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
              
              Toast.fire({
                icon: 'error',
                title: 'No se pudo crear la transacción'
            })
        }
    }

    return (
        <CostContext.Provider  value={{
            ...state,
            getMonth,
            addNewTransaction
        }}>
            { children }
        </CostContext.Provider>
    )
}