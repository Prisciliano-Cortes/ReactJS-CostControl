import { useContext, useState } from 'react'
import { CostContext } from '../../context/cost/CostContext';
import { typesTransaction } from '../../utils/typesState';

export const Collapse = () => {

    const { month, transactions } = useContext( CostContext )
    
    const [showCollapse, setShowCollapse] = useState(false);

    const collapseHow = () => {
        setShowCollapse(!showCollapse);
    }

    return Object.keys(transactions).map( (day, index) => (
        <div className='row justify-content-center animate__animated animate__fadeInDownBig' key={index}>
            <div className='col-12'>
                <h6 className='fw-bold font-size-data mt-3'> { day } - { month }
                </h6>
                {
                    transactions[day].map( ({ _id, types, color, quantity, addressee, resume }) => (
                        <div className="bg-white shadow-sm rounded-2 mb-2" key={_id}>
                            <div className='d-flex justify-content-between' onClick={collapseHow}>
                                <div className='d-flex justify-content-start'>
                                    <div className={`rounded-circle circle bg-${ color } m-2`} ></div>
                                    <h6 className='m-t-collapse'> { addressee } </h6>
                                </div>
                                <div className='d-flex justify-content-end mt-2'>
                                    <h6 className={`fw-bold
                                        ${types === typesTransaction.EXPENSES ? 'text-danger' : 'text-success' }`
                                    }> 
                                        { 
                                            types === typesTransaction.EXPENSES ? 
                                            <i className="fa fa-minus mt-2 text-danger" aria-hidden="true"></i> 
                                            : 
                                            <i className="fa fa-plus mt-2 text-success" aria-hidden="true"></i> 
                                        }  ${quantity} 
                                    </h6>
                                    <div className="dropdown-toggle mx-2 mt-1 text-secondary" />
                                </div>
                            </div>

                            {
                                showCollapse && (
                                    <div className='p-3'>
                                        { resume }
                                    </div>
                                )
                            }
                        </div>
                    ))
                }
            </div>
        </div>
    ))
}
