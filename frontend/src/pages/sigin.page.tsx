import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ButtonComponent } from "../components/commons/button.component";
import InputComponent from "../components/commons/input.component";
import { TextComponent } from "../components/commons/text.component";
import AppLayout from "../layouts/app.layout";
import { AuthService } from "../services/auth.service";

class SigninPage extends Component {

    authService: any = new AuthService()

    state = {
        email: '',
        password: '',
        loader: false
    }

    login = async () => {
        this.setState({
            loader: true
        })
        const { email, password } = this.state
        const obj = { email, password }
        this.authService.login(obj).then(async () => {
            alert("Success")
            this.setState({
                loader: false
            })
        })
    }

    render() {
        return (
            <div>
                <AppLayout>
                    {this.state.loader === true ? <p>loading...</p> :
                        <div className="py-32 bg-[#003355]">
                            <div className="container mx-auto">
                                <div className="flex flex-col justify-center items-center">
                                    <TextComponent style="HEADER" text="Connexion" supplement="text-white pb-10" />
                                    <div className="md:w-1/3">
                                        <InputComponent placeholder="Email" onChange={(e: any) => {
                                            this.setState({
                                                email: e.target.value
                                            })
                                        }} />
                                        <div className="mt-5" />
                                        <InputComponent placeholder="Mot de passe" type="password" onChange={(e: any) => {
                                            this.setState({
                                                password: e.target.value
                                            })
                                        }} />
                                        <div className="mt-8" />
                                        <ButtonComponent name="se connecter" supplement="bg-green-300" click={this.login} />
                                        <div className="mt-8 md:mt-10 flex flex-col md:flex-row md:justify-between items-center">
                                            <Link to="/signup">
                                                <TextComponent style="SUBTITLE" text="Créer un nouveau compte" supplement="text-gray-300" />
                                            </Link>
                                            <Link to="#">
                                                <TextComponent style="SUBTITLE" text="Mot de passe oublié ?" supplement="text-gray-300" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </AppLayout>
            </div>
        )
    }
}

export default SigninPage