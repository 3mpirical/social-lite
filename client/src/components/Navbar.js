import React from "react";
// import anime from "animejs";
import { withAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";
import { Waypoint } from "react-waypoint";
import Searchbar from "./Searchbar";



class Navbar extends React.Component {

    navbarRef = React.createRef();

    handleLeave = () => {
        // console.log("waypoint has left");
        // anime({
        //     targets: this.navbarRef.current,
        //     height: "5rem",
        //     backgroundColor: "rgba(0,0,0, 0.7)",
        //     easing: "linear",
        //     duration: 200,
        // });
    }

    handleEnter = () => {
        // console.log("waypoint has entered");
        // anime({
        //     targets: this.navbarRef.current,
        //     height: "8rem",
        //     backgroundColor: "rgba(0,0,100, 0.7)",
        //     easing: "linear",
        //     duration: 200,
        // });
    }


    handleLogoutClick = (event) => {
        this.props.handleLogout()
        .then((res) => {
            console.log("logged out successfully");
            this.props.history.push("/login");
        })
        .catch((err) => console.log(err));
    }

    renderLeft = () => {
        if(this.props.authenticated()) {
            return (
                <>
                    <a href={`/user/${this.props.user.id}`} className="btn-white navbar__user">
                        <img 
                            className="navbar__user__picture"
                            src={this.props.user.image}
                            alt="user icon"
                        ></img>
                        { this.props.user.name }
                    </a>

                    <a className="messages-btn btn-white" > 
                        <div>Messages</div>
                        <div className="messages-status"></div> 
                    </a>
                </>
            ) 
        } else {
            return (
                <h3 className="navbar__title">Social-Lite</h3>
            )
        }
    }

    renderRight = () => {
        if(this.props.authenticated()) {
            return (
                <>  
                    <Searchbar />
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
            <>
                <nav className="navbar" ref={this.navbarRef} >
                    <div className="navbar__left">
                        { this.renderLeft() }
                    </div>

                    { this.props.user && <h3 className="navbar__title">Social-Lite</h3> }

                    <div className="navbar__right">
                        { this.renderRight() }
                    </div>
                </nav>
                <div className="navbar__clearfix"></div>
                <Waypoint 
                    onLeave={() => this.handleLeave()}
                    onEnter={() => this.handleEnter()}
                ><div className="navbar__waypoint"  ></div></Waypoint>
            </>
        )
    }
}



export default withAuth(Navbar);