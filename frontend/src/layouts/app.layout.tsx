import React, { Component } from "react"
import FooterComponent from "../components/footer.component"
import HeaderComponent from "../components/header.component"


class AppLayout extends Component {
    render() {
        const { children }: any = this.props
        return (
            <div>
                <HeaderComponent />
                {children}
                <FooterComponent />
            </div>
        )
    }
}

export default AppLayout