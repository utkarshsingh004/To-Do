import { useState } from 'react'
import './Input.css'

function Input({value,onChange}) {

    return(
        <div className="input-wrapper">
         <input type="text" value={value} onChange={onChange} placeholder="Enter a task..." />
        </div>
    )
}

export default Input