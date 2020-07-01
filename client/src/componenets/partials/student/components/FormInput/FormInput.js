import React from 'react'
import './forminput.scss'


const FormInput = ({ label, handelChange, ...otherProps }) => {
    return (
        <div className="group">
            <input className="form-input" onChange={handelChange} {...otherProps} />
            {
                label ?
                    (<label className={`${otherProps.value ? 'shrink' : ''} form-input-label `}>  {label}  </label>)
                    : null

            }

        </div>
    )
}

export default FormInput;
