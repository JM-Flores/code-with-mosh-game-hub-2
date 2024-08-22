import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
    count: number;
    next: string | null;
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

    getAll = (config: AxiosRequestConfig) => {
        return axiosInstance.get<FetchResponse<T>>(this.endpoint, config).then(res => res.data)
    }
}

export default APIClient;