import PropTypes from "prop-types";
import { Footer, NavBar } from "../components";

export function MainLayout({ children }){
    return(
        <div>
            <NavBar />
            {children}
            <Footer />
        </div>
    )
}

MainLayout.propTypes = {
    children: PropTypes.node.isRequired
};