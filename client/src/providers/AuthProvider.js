import React from "react";
import axios from "axios";


const AuthContext = React.createContext();


class AuthProvider extends React.Component {
    state = {
        user: null
    }

    value = {
        ...this.state,
        handleRegister: (user) => this.handleRegister(user),
        handleLogin: (user) => this.handleLogin(user),
        handleLogout: (user) => this.handleLogout(user),
        authenticated: () => this.authenticated()
    }

    handleRegister = (user) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/auth`, user)
            .then((res) => {
                resolve("success")
                console.log(res.data);
                this.setState({ user: res.data.data });
            })
            .catch((err) => reject(err));
        });
    }

    handleLogin = (user) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/auth/sign_in`, user)
            .then((res) => {
                resolve("success")
                console.log(res.data);
                this.setState({ user: res.data.data });
            })
            .catch((err) => reject(err));
        });
    }

    handleLogout = (user) => {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/auth/sign_out`)
            .then((res) => {
                resolve("success")
                console.log(res.data);
                this.setState({ user: null });
            })
            .catch((err) => reject(err));
        });
    }
    
    authenticated = () => this.state.user !== null;





    render() {
        return (
            <AuthContext.Provider value={{...this.value}} >
                { this.props.children }
            </AuthContext.Provider>
        )
    }
}


const withAuth = (Component) => {
    return (props) => (
        <AuthContext.Consumer>
            { (value) => <Component {...props} {...value} /> }
        </AuthContext.Consumer>
    )
}

export { AuthProvider, withAuth };