import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../components/commons/button.component";
import InputComponent from "../components/commons/input.component";
import { TextComponent } from "../components/commons/text.component";
import AppLayout from "../layouts/app.layout";

const faqs = [
    {
        title: "Comment s’inscrire sur Maticrypto ?",
        content: "Ouvrez le site web https://heendou.xyz puis cliquez sur « s’inscrire ». Remplissez vos informations (Nom, Prénom, Email, Pays, Adresse, Numéro de téléphone, Mot de passe), puis cliquez sur s’inscrire. Votre compte est créé et vous pouvez vous connectez."
    },
    {
        title: "Comment faire vérifier votre compte sur heendou ?",
        content: "Pour vérifier votre compte munissez-vous de l’un de vos documents d’identité valide (Carte nationale d’identité/ Passeport), un document permettant de vérifier votre adresse (certificat de résidence/Facture d’électricité ou d’eau/Relevé bancaire à votre nom) et un selfie de vous tenant le document d’identité que vous avez chargé pour la vérification (veuillez envoyer une photo correcte sans modification et sans effet miroir). Vous recevrez une notification par mail dès que votre compte est activé."
    },
    {
        title: "Pourquoi heendou est-il obligatoire ?",
        content: "Heendou exige que tous les utilisateurs effectuent la vérification d'identité pour renforcer la sécurité de leur compte et se conformer aux réglementations nationales. De plus il peut vous être demandé de revérifier votre compte à tout moment."
    },
    {
        title: "Comment s’inscrire sur Maticrypto ?",
        content: "Ouvrez le site web https://heendou.xyz puis cliquez sur « s’inscrire ». Remplissez vos informations (Nom, Prénom, Email, Pays, Adresse, Numéro de téléphone, Mot de passe), puis cliquez sur s’inscrire. Votre compte est créé et vous pouvez vous connectez."
    },
    {
        title: "Comment faire vérifier votre compte sur heendou ?",
        content: "Pour vérifier votre compte munissez-vous de l’un de vos documents d’identité valide (Carte nationale d’identité/ Passeport), un document permettant de vérifier votre adresse (certificat de résidence/Facture d’électricité ou d’eau/Relevé bancaire à votre nom) et un selfie de vous tenant le document d’identité que vous avez chargé pour la vérification (veuillez envoyer une photo correcte sans modification et sans effet miroir). Vous recevrez une notification par mail dès que votre compte est activé."
    },
    {
        title: "Pourquoi heendou est-il obligatoire ?",
        content: "Heendou exige que tous les utilisateurs effectuent la vérification d'identité pour renforcer la sécurité de leur compte et se conformer aux réglementations nationales. De plus il peut vous être demandé de revérifier votre compte à tout moment."
    },
]

class FaqPage extends Component {
    render() {
        return (
            <div>
                <AppLayout>
                    <div className="py-32 bg-[#003355]">
                        <div className="container mx-auto">
                            <div className="flex flex-col justify-center items-center">
                                <TextComponent style="HEADER" text="FAQ" supplement="text-white pb-10" />
                                <div className="md:w-3/4">
                                    <div className="grid gap-4 grid-cols-1 md:grid-cols-3">
                                        {
                                            faqs.map((item, index) => {
                                                return (
                                                    <div className="bg-[#06415f] p-4 w-full flex border-gray-400 border flex-col items-center justify-self-center mx-auto">
                                                        <TextComponent text={item.title} supplement="text-white mt-5 text-start" style="TITLE" />
                                                        <TextComponent text={item.content} supplement="text-gray-400 mt-5 text-start" style="CARD" />
                                                    </div>
                                                )
                                            })
                                        }
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

export default FaqPage