import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h1>404</h1>
            <h2>Resource not found.</h2>
            <h2><Link to="/">Back to Home.</Link></h2>
        </div>
     );
}
 
export default NotFound;
