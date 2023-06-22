import { useContext, useState } from 'react'
import { CostContext } from '../../context/cost/CostContext'
import line from '../../assets/line.svg'

export const Card = () => {
    const { expensesTotal, incomeTotal, monthBalance } = useContext( CostContext )

    const [showCollapse, setShowCollapse] = useState(false);

    const collapseHow = () => {
        setShowCollapse(!showCollapse);
    }

    return (
        <div className='row justify-content-center px-3'>
            <div className="bg-white border-card shadow-sm">
                <div className='p-3'>
                    <h1 className="text-center font-card-title animate__animated animate__fadeInDown">Balance del mes</h1>
                    
                    <h1 className="text-center fw-bold font-size-card">${ monthBalance } </h1>

                    <div className='row'>
                        <div className="col-5">
                            <h6 className='text-center text-success font-size-quantity animate__animated animate__fadeInDown'>Ingresos</h6>
                            
                            <div className='d-flex justify-content-center  margin-card animate__animated animate__fadeIn'>
                                <i className="fa fa-plus mt-2 text-success" aria-hidden="true"></i><h1 className='text-success fw-bold'>${ incomeTotal }</h1>
                            </div>
                        </div>

                        <div className='col-2 d-flex justify-content-center'>
                            <img src={line} alt='line' className='h-75 mt-2' />
                        </div>
                
                        <div className="col-5">
                            <h6 className='text-center text-danger font-size-quantity animate__animated animate__fadeInDown'>Gastos</h6>
                            
                            <div className='d-flex justify-content-center margin-card animate__animated animate__fadeIn'>
                                <i className="fa fa-minus mt-2 text-danger" aria-hidden="true"></i><h1 className='text-danger fw-bold'>${ expensesTotal } </h1>
                            </div>
                        </div>
                    </div>

                    <div className='mt-3'>
                        <h6 className='text-center font-size-view text-secondary animate__animated animate__fadeInDown'>Ver analíticas</h6>
                        <div className='dropdown-toggle d-flex justify-content-center text-secondary' onClick={collapseHow}>
                        </div>

                        {
                            showCollapse && (
                                <div className='pt-3 text-center fw-bold'>
                                    No hay analíticas
                                </div>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
