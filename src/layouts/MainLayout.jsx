import PropTypes from "prop-types";
import { NavBar } from "../components";

export function MainLayout({ children }){
    return(
        <div>
            <NavBar />
            {children}
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};