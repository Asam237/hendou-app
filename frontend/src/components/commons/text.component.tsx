import React, { FC } from "react"

interface IProps {
    text: string
    style?: string
    supplement?: string
}

const TEXT_STYLE = {
    header: "HEADER",
    title: "TITLE",
    subTitle: "SUBTITLE",
    default: "DEFAULT",
    card: "CARD",
    main: "MAIN"
}

const changeByVariant = (variant?: string, supplement?: string) => {
    if (variant === TEXT_STYLE.header) {
        return "px-4 text-3xl md:text-5xl font-semibold " + supplement
    }
    if (variant === TEXT_STYLE.main) {
        return "px-4 text-sm font-semibold " + supplement
    }
    if (variant === TEXT_STYLE.title) {
        return "px-4 text-2xl font-semibold " + supplement
    }
    if (variant === TEXT_STYLE.subTitle) {
        return "text-lg font-normal " + supplement
    }
    if (variant === TEXT_STYLE.card) {
        return "px-4 text-sm font-semibold " + supplement
    }
    if (variant === TEXT_STYLE.default) {
        return "px-4 text-base" + supplement
    }
}

export const TextComponent: FC<IProps> = ({
    text,
    style,
    supplement
}) => {
    const myStyle = changeByVariant(style, supplement)
    return <p className={`${myStyle}`}>{text}</p>
}
