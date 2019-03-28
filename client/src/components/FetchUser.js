import React from "react";
import axios from "axios";
import { withAuth } from "../providers/AuthProvider";



class FetchUser extends React.Component {
    state = {loaded: false};

    componentDidMount() {
        if(this.props.authenticated()) {
            // if the user is authenticated, continue as normal
            this.loaded();
        } else {
            // if token is available for authentication, 
            // validdate it and set the returned user to state
            if(this.checkLocalToken()) {
                console.log(this.checkLocalToken());
                axios.get(`/api/auth/validate_token`)
                .then((res) => {
                    this.props.setUser(res.data.data);
                    this.loaded();
                })
                .catch((err) => {
                    this.loaded();
                    console.log("ERROR: token validation failed");
                    console.log(err)
                });
            } else {
                this.loaded();
                // No token available for authentication
            }
        }
    }

    checkLocalToken  = () => {
        return localStorage.getItem("access-token");
    }

    loaded = () => {
        this.setState({ loaded: true });
    }

    render() {
        return this.state.loaded? this.props.children : null;
    }
}



export default withAuth(FetchUser);