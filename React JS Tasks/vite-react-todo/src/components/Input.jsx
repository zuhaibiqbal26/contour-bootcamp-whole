import React from 'react'

export default function Input({value, onChange, type = 'text'}) {

    return (
        <input type={type} value={value} onChange={onChange} />
    )
}