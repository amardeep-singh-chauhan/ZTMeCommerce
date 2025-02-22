import React from 'react'
import './Button.scss'

const BUTTON_TYPES_CLASSES = {
    'google': 'google-sign-in',
    'inverted': 'inverted',
}

function Button({ children, buttonType, ...otherProps }) {
    return (
        <button className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`} {...otherProps}>
            {children}
        </button>
    )
}

export default Button