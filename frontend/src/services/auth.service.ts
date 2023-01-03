import { DataService } from "./data.service";

class AuthService extends DataService {
    login = (data: any) => {
        this.client.post("/auth/login", data)
    }
    register = (data: any) => {
        this.client.post("/auth/create", data)
    }
}

export { AuthService }