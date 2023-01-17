import axios from "axios";

class DataService {
    client: any
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:3000",
            headers: {}
        })
    }
    post = (url: string, data: any, config: any) => {
        return this.client.post(url, data, config)
    }
}

export default DataService