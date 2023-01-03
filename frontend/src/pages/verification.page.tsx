import React, { Component } from "react"
import { ButtonComponent } from "../components/commons/button.component"
import { TextComponent } from "../components/commons/text.component"
import AppLayout from "../layouts/app.layout"

class VerificationPage extends Component {
    render() {
        return (
            <AppLayout>
                <div className="py-32 bg-[#003355]">
                    <div className="container mx-auto">
                        <div className="w-8/12 lg:w-1/2 mx-auto bg-[#173f58]">
                            <div className="bg-[#2d5269] h-14 flex justify-center items-center uppercase">
                                <TextComponent text="verification d'identite" style="TITLE" supplement="text-gray-100" />
                            </div>
                            <div className="p-6">
                                <TextComponent text="Verifiez votre compte pour finaliser votre inscription" supplement="text-gray-100 text-center text-gray-100" style="DEFAULT" />
                                <TextComponent text="Vous deviez verifier votre compte pour acceder a votre espace membre et faire des transactions" supplement="text-gray-100 text-center text-gray-100 pt-4" style="DEFAULT" />
                                <div className="pt-10 w-1/2 mx-auto">
                                    <ButtonComponent name="verifier votre compte" supplement="bg-red-500 uppercase text-white" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppLayout>
        )
    }
}


export default VerificationPage