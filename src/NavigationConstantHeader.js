import { Link } from "react-router-dom/cjs/react-router-dom.min";

const NavigationConstantHeader = ({user}) => {
    return (  
        <nav className="navigation-constant-header">

            <h1> <Link to="/">CodeInsight</Link></h1>
            <h2>{user.name}</h2>

            {/*<div className="logout-container"> <button className="logout" disabled> Logout </button></div>*/}
        </nav>
    );
}
 
export default NavigationConstantHeader;