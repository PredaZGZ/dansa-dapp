import axios from "axios"
import { isExpired } from "react-jwt";
import { useDispatch } from "react-redux";
import { setName, setEmail } from "../Slices/AuthSlice";


const ValidateToken = (token) => {
    const config = {
        headers: {
            "auth-token": token
        }
    }
    
    const dispatch = useDispatch();

    if(token === '' || token === null || token === undefined){
        return false;
    } else if(isExpired(token)){
        return false;
    } else {
        return axios.post('http://localhost:4000/auth/validate', {}, config).then(res => {
            if (res.status === 200) {
                dispatch(setName(res.data.name))
                dispatch(setEmail(res.data.email))
                return res;
            }
            else {
                return false;
            }
        })
    }
    
}


export default ValidateToken;