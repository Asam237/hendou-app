import React from "react"
import { Link } from "react-router-dom"
import { buttons, navs } from "../routes/app.routes"
import { ButtonComponent } from "./commons/button.component"
import { TextComponent } from "./commons/text.component"


const HeaderComponent = () => {
    return (
        <header className="bg-gray-800 px-4 md:px-0">
            <div className="container mx-auto py-4 md:py-8">
                <div className="flex justify-between items-center">
                    <Link to="/">
                        <TextComponent text="heendou" style="TITLE" supplement="text-gray-100" />
                    </Link>
                    <nav className="hidden xl:flex">
                        <ul className="flex text-gray-100">
                            {navs.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link}>
                                            <TextComponent text={item.name} supplement="uppercase" style="MAIN" />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                    <div className="hidden md:flex">
                        <ul className="flex justify-center items-center">
                            {buttons.map((item, index) => {
                                return (
                                    <li key={index} className="w-36 mt-2 md:mt-0 ml-0 md:ml-2">
                                        <ButtonComponent link={item.link} click={() => item.link} name={item.name} supplement="bg-green-300" />
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default HeaderComponent