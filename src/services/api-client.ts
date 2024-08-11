import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: 'f12183e770db41d5bb8ac0ff1eb85513'
    }
})