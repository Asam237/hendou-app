import React, { FC } from "react";
import { Link } from "react-router-dom";

interface Props {
    name: string
    supplement?: string
    link?: any
    click?: any
}

export const ButtonComponent: FC<Props> = ({
    name,
    supplement,
    link,
    click
}) => {
    return (
        <Link to={link}><button onClick={click} className={`uppercase text-sm font-semibold text-gray-600 py-4 rounded-md w-full ${supplement}`}>{name}</button></Link>
    )
}
