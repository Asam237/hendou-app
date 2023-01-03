import React, { FC } from "react"

interface IProps {
    placeholder: string
    onChange: any
    type?: any
}

const InputComponent: FC<IProps> = ({
    placeholder,
    onChange,
    type
}) => {
    return (
        <input className="w-full bg-inherit border-gray-400 border px-6 py-3 text-white" placeholder={placeholder} onChange={onChange} type={type} />)
}

export default InputComponent