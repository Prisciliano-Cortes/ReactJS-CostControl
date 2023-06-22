import * as Yup from "yup";

export default Yup.object().shape({
    month: Yup.string()
        .required("El mes es obligatorio"),
    day: Yup.string()
        .required("El día es obligatorio"),
    typeTransaction: Yup.string()
        .required("El tipo es obligatorio"),
    quantity: Yup.number()
        .min(1, "Ingrese al menos un número")
        .required("La cantidad es obligatorio"),
    addressee: Yup.string()
        .min(1, 'Escriba al menos una letra')
        .required('EL destinatario es obligatorio'),
    resume: Yup.string()
    .min(1, 'Escriba la descripción')
    .required('La descripción es obligatorio')
});