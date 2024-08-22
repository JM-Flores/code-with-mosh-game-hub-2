import axios from "axios";

export interface FetchResponse<T> {
    count: number;
    results: T[];
  }

const axiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f12183e770db41d5bb8ac0ff1eb85513'
    }
})

class APIClient<T> {
    endpoint: string;

    constructor(endpoint: string){
        this.endpoint=endpoint;
    }

    get() {
        () => axiosInstance.get<FetchResponse<T>>(this.endpoint).then(res => res.data)
    }
}

export default axiosInstance;