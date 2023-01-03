import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../components/commons/button.component";
import InputComponent from "../components/commons/input.component";
import { TextComponent } from "../components/commons/text.component";
import AppLayout from "../layouts/app.layout";

class ContactPage extends Component {
    render() {
        return (
            <div>
                <AppLayout>
                    <div className="py-32 bg-[#003355]">
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center items-center">
                                <TextComponent style="HEADER" text="Contactez-Nous" supplement="text-white pb-10" />
                                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:w-1/2">
                                    <InputComponent placeholder="Nom*" onChange={null} />
                                    <InputComponent placeholder="Prenom*" onChange={null} />
                                    <InputComponent placeholder="Telephone*" onChange={null} />
                                    <InputComponent placeholder="Email*" onChange={null} />
                                </div>
                                <div className="mt-4 w-9/12 sm:w-[39%] md:w-1/2">
                                    <textarea className="w-full bg-inherit border-gray-400 border px-6 py-3 text-white" placeholder="Votre message" cols={3} rows={5} />
                                </div>
                                <div className="grid gap-4 grid-cols-1 md:grid-cols-2 md:w-1/2">
                                    <ButtonComponent name="ENVOYER" supplement="bg-green-300 px-8 md:w-1/2 mt-4" />
                                </div>
                            </div>
                        </div>
                    </div>
                </AppLayout>
            </div>
        )
    }
}

export default ContactPage