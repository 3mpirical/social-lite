import React from "react";
import { withAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";



class Navbar extends React.Component {
    

    handleLogoutClick = (event) => {
        this.props.handleLogout()
        .then((res) => {
            console.log("logged out successfully");
            this.props.history.push("/login");
        })
        .catch((err) => console.log(err));
    }

    renderLinks = () => {
        if(this.props.authenticated()) {
            return (
                <>
                    <Link to="/" className="btn-white">Home</Link>
                    <a 
                        onClick={this.handleLogoutClick} 
                        className="btn-white"
                    >Logout</a>
                </>
            ) 
        } else {
            return (
                <>
                    <Link to="/login" className="btn-white">Login</Link>
                    <Link to="/register" className="btn-white">Register</Link>
                </>
            )
        }
    }

    render() {
        return(
            <nav className="navbar">
                <div className="navbar__left">
                    <h3 className="navbar__title">Social-Lite</h3>
                </div>

                <div className="navbar__right">
                    { this.renderLinks() }
                </div>
            </nav>
        )
    }
}



export default withAuth(Navbar);