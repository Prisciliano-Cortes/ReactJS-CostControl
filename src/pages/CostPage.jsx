import { Outlet } from 'react-router-dom'
import { isMobile } from 'react-device-detect';
import { CostLayout } from '../layout/CostLayout'
import { Mobile } from './Mobile';

export const CostPage = () => {
    return (
        <div>
            {
                isMobile ?
                <CostLayout />
                :
                <Mobile />
            }
            
            <Outlet />
        </div>
    )
}
