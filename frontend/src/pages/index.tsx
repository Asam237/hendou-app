import React, { Component } from "react"
import { ButtonComponent } from "../components/commons/button.component"
import { TextComponent } from "../components/commons/text.component"
import FooterComponent from "../components/footer.component"
import HeaderComponent from "../components/header.component"
import AppLayout from "../layouts/app.layout"
import { buttons } from "../routes/app.routes"

class IndexPage extends Component {
    render() {
        return (
            <AppLayout>
                <main>
                    <div style={{ backgroundSize: 'cover', position: 'relative' }} className={`z-50 flex justify-center items-center h-[50vh] md:h-[70vh] text-center relative bg-fixed bg-center bg-cover bg-no-repeat bg-gradient-to-r from-blue-500 to-green-900 `}>
                        <div className="container mx-auto">
                            <div className="flex justify-center items-center flex-col">
                                <TextComponent text="heendou - la finance en marche" supplement="uppercase text-green-400" style="SUBTITLE" />
                                <TextComponent text="Achetez et vendez vos USDT en toute sécurité" supplement="text-white mt-4" style="TITLE" />
                                <div className="mt-8">
                                    <ul className="flex flex-col md:flex-row justify-center items-center">
                                        <li>
                                            <ButtonComponent link="/signin" supplement="bg-green-300 mx-1 w-[200px] md:w-52 uppercase mt-2 md:mt-0" click={() => ''} name="Se connecter" />
                                        </li>
                                        <li>
                                            <ButtonComponent link="#fonctionnement" supplement="bg-gray-800 mx-1 text-[#fff] w-[200px] md:w-52 uppercase mt-6 md:mt-0" click={() => ''} name="Comment ça marche?" />
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-[#003355] py-32">
                        <div className="container mx-auto">
                            <div className="flex justify-center items-center flex-col">
                                <TextComponent text="Nos Services" supplement="text-white mt-4" style="HEADER" />
                            </div>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 justify-center">
                                <div className="bg-[#06415f] p-10 w-72 h-44 flex flex-col justify-center border-gray-400 border  items-center justify-self-center mx-auto">
                                    <img src={require('../assets/imgs/achat.png')} alt="img" className="w-20 h-20" />
                                    <TextComponent text="ENVOI DEVISE" supplement="text-white mt-5 text-center" style="CARD" />
                                </div>
                                <div className="bg-[#06415f] p-10 w-72 h-44 flex border-gray-400 border flex-col justify-center items-center justify-self-center mx-auto">
                                    <img src={require('../assets/imgs/dollar.png')} alt="img" className="w-20 h-20" />
                                    <TextComponent text="RÉCEPTION DEVISE" supplement="text-white mt-5 text-center" style="CARD" />
                                </div>
                                <div className="bg-[#06415f] p-10 w-72 h-44 flex border-gray-400 border flex-col justify-center items-center justify-self-center mx-auto">
                                    <img src={require('../assets/imgs/exchange.png')} alt="img" className="w-20 h-20" />
                                    <TextComponent text="ECHANGE DEVISE" supplement="text-white mt-5 text-center" style="CARD" />
                                </div>
                                <div className="bg-[#06415f] p-10 w-72 h-44 flex flex-col border-gray-400 border  justify-center items-center justify-self-center mx-auto">
                                    <img src={require('../assets/imgs/receive.png')} alt="img" className="w-20 h-20" />
                                    <TextComponent text="ACHAT CRYPTOMONNAIE" supplement="text-white mt-5 text-center" style="CARD" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="#fonctionnement" className="bg-[#002944] py-32">
                        <div className="container mx-auto">
                            <div className="flex justify-center items-center flex-col">
                                <TextComponent text="Fonctionnement" supplement="text-white mt-4" style="HEADER" />
                            </div>
                            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 justify-center">
                                <div className="flex items-center justify-center justify-self-center">
                                    <div className="hidden 2xl:flex ml-16"></div>
                                    <div>
                                        <div className="bg-[#06415f] p-6 w-44 h-44 flex flex-col justify-center border-gray-400 border  items-center justify-self-center mx-auto rounded-full">
                                            <img src={require('../assets/imgs/growth.png')} alt="img" className="w-16 h-16" />
                                        </div>
                                        <TextComponent text="Se connecter" supplement="uppercase text-white mt-5 text-center" style="CARD" />
                                    </div>
                                    <div className="hidden 2xl:flex ml-16">
                                        <img src={require('../assets/imgs/arrow.png')} alt="img" className="w-10 h-10" />
                                    </div>
                                </div>
                                <div className="mt-10 2xl:mt-0">
                                    <div className="flex items-center justify-center justify-self-center">
                                        <div>
                                            <div className="bg-[#06415f] p-6 w-44 h-44 flex flex-col justify-center border-gray-400 border  items-center justify-self-center mx-auto rounded-full">
                                                <img src={require('../assets/imgs/repair.png')} alt="img" className="w-16 h-16" />
                                            </div>
                                            <TextComponent text="Choisir Un Service" supplement="uppercase text-white mt-5 text-center" style="CARD" />
                                        </div>
                                        <div className="hidden 2xl:flex ml-16">
                                            <img src={require('../assets/imgs/arrow.png')} alt="img" className="w-10 h-10" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 2xl:mt-0">
                                    <div className="flex items-center justify-center justify-self-center">
                                        <div>
                                            <div className="bg-[#06415f] p-6 w-44 h-44 flex flex-col justify-center border-gray-400 border  items-center justify-self-center mx-auto rounded-full">
                                                <img src={require('../assets/imgs/bank.png')} alt="img" className="w-16 h-16" />
                                            </div>
                                            <TextComponent text="Faire Sa Transaction" supplement="uppercase text-white mt-5 text-center" style="CARD" />
                                        </div>
                                        <div className="hidden 2xl:flex ml-16">
                                            <img src={require('../assets/imgs/arrow.png')} alt="img" className="w-10 h-10" />
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-10 2xl:mt-0">
                                    <div className="flex items-center justify-center justify-self-center">
                                        <div>
                                            <div className="bg-[#06415f] p-6 w-44 h-44 flex flex-col justify-center border-gray-400 border  items-center justify-self-center mx-auto rounded-full">
                                                <img src={require('../assets/imgs/satisfaction.png')} alt="img" className="w-16 h-16" />
                                            </div>
                                            <TextComponent text="Satisfaction" supplement="uppercase text-white mt-5 text-center" style="CARD" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#003355] py-32">
                        <div className="container mx-auto">
                            <div className="flex justify-center items-center flex-col">
                                <TextComponent text="Nouveaux Utilisateurs" supplement="text-white mt-4" style="HEADER" />
                                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-16 mb-8 justify-center">

                                    <div>
                                        <img src={require('../assets/imgs/user.png')} alt="" />
                                    </div>
                                    <div>
                                        <img src={require('../assets/imgs/user.png')} alt="" />
                                    </div>
                                    <div>
                                        <img src={require('../assets/imgs/user.png')} alt="" />
                                    </div>
                                    <div>
                                        <img src={require('../assets/imgs/user.png')} alt="" />
                                    </div>
                                </div>
                                <ButtonComponent click={() => ""} name="INSCRIVEZ-VOUS MAINTENANT" supplement="bg-green-300 w-56 px-2 md:px-0 md:w-72 mt-2 md:mt-0" />
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#002944] py-32">
                        <div className="container mx-auto">
                            <div className="flex justify-center items-center flex-col">
                                <TextComponent text="Vous Serez En Confiance Avec Nous" supplement="text-white mt-4 text-center" style="HEADER" />
                            </div>
                            <TextComponent style="SUBTITLE" supplement="text-gray-400 mt-4 text-center xl:w-1/2 mx-auto" text="Cette plateforme tient vraiment ses promesses. J'arrive à réaliser mes échanges de devise rapidement et sûrement." />
                            <div className="flex flex-col items-center mt-10">
                                <img src={require('../assets/imgs/profil.png')} className="w-24 h-24" alt="" />
                                <TextComponent style="SUBTITLE" supplement="text-gray-600 mt-4 text-center xl:w-1/2 mx-auto" text="Le Perfectionniste" />
                            </div>
                        </div>
                    </div>
                </main >
            </AppLayout>
        )
    }
}

export default IndexPage