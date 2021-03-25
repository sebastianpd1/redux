import React from 'react'

const CustomButton = ({children, isGoogleSignIn, ...otherProps})=>(

    <button className={`${isGoogleSignIn? 'btn btn-danger': ''}btn btn-primary`}{...otherProps}>
        {children}
    </button>

)

export default CustomButton;