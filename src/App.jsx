import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import { CostProvider } from "./context/cost/CostProvider";
import { ModalProvider } from "./context/modal/ModalProvider";
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import './styles/styles.css'

export const App = () => {
    return (
        <CostProvider>
            <ModalProvider>
                <RouterProvider router={router} />
            </ModalProvider>
        </CostProvider>
    )
}
