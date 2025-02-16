import React from 'react'
import './formInput.scss'

function FormInput({ handleChange, label, ...otherProps }) {
    return (
        <div className="group">
            <input onChange={handleChange} className="form-input" {...otherProps} />
            {label &&
                <label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`}>
                    {label}
                </label>
            }
        </div>
    )
}

export default FormInput