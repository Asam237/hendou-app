import DataService from "./data.service";

class AuthService extends DataService {
    login = (data: any) => {
        return this.client.post("/auth/login", data)
    }
}

export default AuthService