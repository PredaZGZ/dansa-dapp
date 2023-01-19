import { Link } from 'react-router-dom';
import validateToken from './validateToken'

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token');
    if (token === '' || token === null) return <Link to="/login" />;
    else 
    if (validateToken(token)) {
        return children
    } else {
        return <Link to="/login" />;
    }
    ;
};

export default PrivateRoute;
