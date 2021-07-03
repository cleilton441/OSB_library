import React from 'react'
import './Input.css'

interface PropsInput {
    setText: React.Dispatch<React.SetStateAction<string>>
}

 function Input(props: PropsInput) {
    return (
        <div className="pesquisa" >
            <input type="text" onChange={(e: React.FormEvent<HTMLInputElement>) => props.setText(e.currentTarget.value)}/>
        </div>
    )
}

export default Input;
