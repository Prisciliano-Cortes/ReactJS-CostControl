import React from 'react'

export const ButtonModal = ({ children, ...rest }) => {
    return (
        <button
            className='color-bg text-white w-100 rounded-1 border-0 py-2'
            {...rest }
        >
            { children }
        </button>
    )
}
