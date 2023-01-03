import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../components/commons/button.component";
import InputComponent from "../components/commons/input.component";
import { TextComponent } from "../components/commons/text.component";
import AppLayout from "../layouts/app.layout";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <AppLayout>
                    <div className="py-32 bg-[#003355]">
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center items-center">
                                <TextComponent style="HEADER" text="A propos" supplement="text-white pb-10" />
                                <div className="md:w-3/4 mt-8">
                                    <div className="flex flex-col md:flex-row">
                                        <div className="w-full md:w-1/2">
                                            <div className="rounded-md bg-green-300 opacity-5 h-[160px] mx-4">Logo</div>
                                        </div>
                                        <div className="w-full md:w-1/2 mt-8 md:mt-0">
                                            <TextComponent text="Découvrir, Nous Connaître" supplement="text-white text-start" style="TITLE" />
                                            <TextComponent text="Heendou est une solution d'échange de devise focalisée sur les cryptomonnaies. Nous permettons à n'importe qui, de n'importe où, de pouvoir envoyer et recevoir la monnaie électronique de son choix facilement et en toute sécurité. Notre vision est d'accroître la liberté des échanges de la cryptomonnaie à l'échelle mondiale et l'utilisation des monnaies et portefeuilles électroniques en général." supplement="text-gray-400 mt-5 text-start" style="CARD" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </AppLayout>
            </div>
        )
    }
}

export default AboutPage