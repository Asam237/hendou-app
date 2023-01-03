import axios from "axios"

class DataService {
    client: any
    constructor() {
        this.client = axios.create({
            baseURL: "http://localhost:1300",
            headers: {}
        })
    }
    post = (url: string, data: any, config: any) => {
        this.client.post(url, data, config)
    }
    get = (url: string, config: any) => {
        this.client.get(url, config)
    }
    delete = (url: string, config: any) => {
        this.client.delete(url, config)
    }
    put = (url: string, config: any) => {
        this.client.put(url, config)
    }
}
export { DataService }