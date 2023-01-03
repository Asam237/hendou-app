import React, { Component } from "react";
import { Link, Navigation } from "react-router-dom";
import { ButtonComponent } from "../components/commons/button.component";
import InputComponent from "../components/commons/input.component";
import { TextComponent } from "../components/commons/text.component";
import AppLayout from "../layouts/app.layout";

class SignupPage extends Component {

    verification = () => {
        // navigate('/home', {replace: true});
    }

    render() {
        return (
            <div>
                <AppLayout>
                    <div className="py-32 bg-[#003355]">
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center items-center">
                                <TextComponent style="HEADER" text="Inscription" supplement="text-white pb-10" />
                                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:w-1/2">
                                    <InputComponent placeholder="Nom*" onChange={null} />
                                    <InputComponent placeholder="Prenom*" onChange={null} />
                                    <InputComponent placeholder="Email*" onChange={null} />
                                    <InputComponent placeholder="Confirmer Email*" onChange={null} />
                                    <InputComponent placeholder="Mot de passe*" type="password" onChange={null} />
                                    <InputComponent placeholder="Confirmer Mot de passe*" type="password" onChange={null} />
                                    <InputComponent placeholder="Adresse" onChange={null} />
                                    <InputComponent placeholder="Telephone Ex: +237691846922" onChange={null} />
                                </div>
                                <div className="mt-8" />
                                <div className="w-3/4 md:w-1/2">
                                    <ButtonComponent name="s'inscrire" supplement="bg-green-300" click={this.verification} />
                                </div>
                                <div className="mt-8 md:mt-2 flex md:w-1/2 md:items-start">
                                    <Link to="/signin">
                                        <TextComponent style="SUBTITLE" text="Se connecter" supplement="text-gray-300" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </AppLayout>
            </div>
        )
    }
}

export default SignupPage