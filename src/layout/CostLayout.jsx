import { useContext } from 'react'
import { Navbar } from './Navbar'
import { FormCost } from './FormCost'
import { Card } from '../components/card/Card'
import { Button } from '../components/button/Button'
import { Collapse } from '../components/collapse/Collapse'
import { ModalContext } from '../context/modal/modalContext'
import { Mobile } from '../pages/Mobile';

export const CostLayout = () => {
    
    const { openModal } = useContext( ModalContext )

    return (
        <>
            <Navbar />
            <div className='container'>
                <Card />                
                
                <Collapse />
                
                <FormCost />

                <Button onClick={ openModal } >
                    Agregar movimiento
                </Button>
            </div>
        </>
    )
}
