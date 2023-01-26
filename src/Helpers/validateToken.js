import axios from "axios"
import { isExpired } from "react-jwt";

const validateToken = (token) => {
    const config = {
        headers: {
            "auth-token": token
        }
    }

    if(token === '' || token === null || token === undefined){
        return false;
    } else if(isExpired(token)){
        return false;
    } else {
        return axios.post('http://localhost:4000/auth/validate', {}, config).then(res => {
            if (res.status === 200) {
                sessionStorage.setItem("user", JSON.stringify(res.data))
                return res;
            }
            else {
                return false;
            }
        })
    }
    
}


export default validateToken;