import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import ValidateToken from './validateToken'

const PrivateRoute = ({ children }) => {

    const token = useSelector((state) => state.auth.userToken)
    if (token === '' || token === null) return <Navigate to="/login" />;
    else 
    if (ValidateToken(token)) {
        return children
    } else {
        return <Navigate to="/login" />;
    }
    ;
};

export default PrivateRoute;
