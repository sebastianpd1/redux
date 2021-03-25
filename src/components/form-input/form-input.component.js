import React from 'react'

const FormInput= ({handleChange, label, ...otherProps}) =>(
    <div className="">
        <label>{label}</label>
        <input onChange={handleChange} {...otherProps}/>
    </div>
)

export default FormInput;