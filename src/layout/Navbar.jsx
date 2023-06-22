import { useContext } from 'react'
import { monthValue } from '../utils/month'
import { CostContext } from '../context/cost/CostContext'

export const Navbar = () => {

    const { getMonth } = useContext( CostContext )

    const viewMonth = ( month ) => {
        getMonth(month)
    }
    
    return (
        <div className='navbar color-bg border-navbar p-3 mb-3'>
            <div className='navigator'>
                {
                    monthValue.map( ({ month, id }) => (
                        <div 
                            key={id} 
                            className='text-white mx-3 text-month'
                            onClick={ () => viewMonth(month) }
                        > 
                            {month } 
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
