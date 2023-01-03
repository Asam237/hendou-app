import React from "react"
import { buttons, contacts, footers, navs } from "../routes/app.routes"
import { ButtonComponent } from "./commons/button.component"
import { TextComponent } from "./commons/text.component"


const FooterComponent = () => {
    return (
        <footer className="bg-gray-800 p-4 xl:p-0">
            <div className="container mx-auto py-4 md:py-8">
                <div className="flex flex-col xl:flex-row xl:justify-between xl:items-center">
                    <TextComponent text="heendou" style="TITLE" supplement="text-gray-100 text-center uppercase" />
                    <nav>
                        <ul className="flex flex-col items-center xl:flex-row text-gray-100">
                            {navs.map((item, index) => {
                                return (
                                    <li key={index} className="pt-1 xl:py-0">
                                        <a href={item.link}>
                                            <TextComponent text={item.name} supplement="uppercase" style="DEFAULT" />
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
                <hr className="h-[1px] text-gray-600 my-6 mx-2" />
                <div className="flex justify-between items-center flex-col md:flex-row">
                    <TextComponent text="Copyright © 2022. Tous droits réservés." supplement="uppercase text-gray-100 text-center" style="DEFAULT" />
                    <nav className="pt-6 md:pt-0">
                        <ul className="flex text-gray-100">
                            {contacts.map((item, index) => {
                                return (
                                    <li key={index}>
                                        <a href={item.link}>
                                           <img src={item.img} className="w-6 h-6 ml-10"/>
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default FooterComponent