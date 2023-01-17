import { Navigate } from 'react-router-dom';
import validateToken from './validateToken'

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token === '' || token === null) return <Navigate to="/login" />;
    else 
    if (validateToken(token)) {
        return children
    } else {
        return <Navigate to="/login" />;
    }
    ;
};

export default PrivateRoute;
