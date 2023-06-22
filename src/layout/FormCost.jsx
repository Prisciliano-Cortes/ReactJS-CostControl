import { useContext } from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import PureModal from "react-pure-modal";
import { dayValues } from '../utils/days';
import { monthValue } from '../utils/month';
import validateForm from '../validations/validateForm';
import { transactionValue } from '../utils/transaction';
import { CostContext } from '../context/cost/CostContext';
import { ModalContext } from '../context/modal/modalContext'
import { ButtonModal } from '../components/button/ButtonModal';
import { ButtonDisabled } from '../components/button/ButtonDisabled';
import "react-pure-modal/dist/react-pure-modal.min.css";

export const FormCost = () => {

    const { modalForm, closeModal } = useContext( ModalContext )

    const { addNewTransaction } = useContext(CostContext)

    return (
        <>
            {
                modalForm && (
                    <PureModal
                        isOpen={modalForm}
                        width="95%"
                        closeButton={<div className="bg-white text-black text-xl">X</div>}
                        onClose={closeModal}
                        >
                            <p className='text-center mt-2 fw-bold'>Nueva transacción</p>
                        <div>

                            <Formik
                                initialValues={{ month: '', day: '', typeTransaction: '', quantity: '', addressee: '', resume: '' }}
                                onSubmit={(values) => {
                                    try {
                                        addNewTransaction(values)

                                        setTimeout(() => {
                                            closeModal()
                                        }, 2000);

                                        setTimeout(() => {
                                            window.location.reload()
                                        }, 3000);
                                    } catch (error) {
                                        console.log(error)
                                    }
                                }}
                                validationSchema={ validateForm }
                            >
                                { formData => (
                                    <Form>
                                        <div className='mb-4'>
                                            <Field 
                                                as="select" 
                                                name='month'
                                                className='w-100 form-control mt-3 mb-3'
                                            >
                                                <option>Selecciona un mes</option>
                                                {
                                                    monthValue.map( ({id, month}) => (
                                                        <option key={id}> {month} </option>
                                                    ))
                                                }
                                            </Field>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                as="select" 
                                                name='day'
                                                className='w-100 form-control mt-3 mb-3'
                                            >
                                                <option value='' disabled selected hidden>Selecciona un día</option>
                                                {
                                                    dayValues.map(({ day }) => (
                                                        <option key={day}> {day} </option>
                                                    ))
                                                }
                                            </Field>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                as="select" 
                                                name='typeTransaction'
                                                className='w-100 form-control mt-3 mb-3'
                                            >
                                                <option>Selecciona transacción</option>
                                                {
                                                    transactionValue.map(({ id, value }) => (
                                                        <option key={ id }> { value } </option>
                                                    ))
                                                }
                                            </Field>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                name="quantity" 
                                                type="text"
                                                placeholder="Ingresa cantidad"
                                                className='w-100 form-control mt-3 mb-3'
                                            />
                                            <ErrorMessage name="quantity">
                                                { 
                                                    err => 
                                                    <div className="text-danger">
                                                        {err}
                                                    </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                name="addressee" 
                                                type="text"
                                                placeholder="Ingrese destinatario"
                                                className='w-100 form-control mt-3 mb-3'
                                            />
                                            <ErrorMessage name="addressee">
                                                { err => 
                                                    <div className="text-danger">
                                                    {err}
                                                </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        <div className='mb-4'>
                                            <Field 
                                                name="resume"
                                                as="textarea"
                                                placeholder="Descripción"
                                                className='w-100 form-control mt-3 mb-3'
                                            />
                                            <ErrorMessage name="resume">
                                                { err => 
                                                    <div className="text-danger">
                                                    {err}
                                                </div> 
                                                }
                                            </ErrorMessage>
                                        </div>

                                        {
                                            !formData.values.month || !formData.values.day || !formData.values.typeTransaction || !formData.values.quantity || !formData.values.addressee || !formData.values.resume ?
                                            (
                                                <ButtonDisabled disabled>
                                                    Guardar transacción
                                                </ButtonDisabled>
                                            ) : (
                                                <ButtonModal type="submit">
                                                    Guardar transacción
                                                </ButtonModal>
                                            )
                                        }
                                    </Form>
                                )}
                            </Formik>
                        </div>                        
                    </PureModal>
                )
            }
        </>
    )
}
