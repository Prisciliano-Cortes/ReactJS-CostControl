
export const Button = ({ children, ...rest }) => {
    return (
        <div className='d-flex justify-content-center'>
            <button
                className='color-bg-button text-white w-75 position-absolute bottom-button rounded-1 border-0 py-2'
                {...rest }
            >
                { children }
            </button>
        </div>
    )
}
