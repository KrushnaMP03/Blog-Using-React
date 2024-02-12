import React from 'react'

function Button({
    children ,
    bgcolor = 'bg-blue-600',
    type = 'button',
    textColor = 'text-white',
    className = '',
    ...props
}) {
  return (
    <button className={`px-4 py-2 rounded-lg ${bgcolor} ${textColor} ${className}`} {...props}>{children}</button>
  )
}

export default Button