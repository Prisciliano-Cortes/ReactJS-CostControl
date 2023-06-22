import React from 'react'

export const ButtonDisabled = ({ children, ...rest }) => {
    return (
        <button
            className='color-button-disabled text-black w-100 rounded-1 border-0 py-2'
            {...rest }
        >
            { children }
        </button>
    )
}
