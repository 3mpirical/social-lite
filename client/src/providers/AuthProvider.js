import React from "react";
import axios from "axios";


const AuthContext = React.createContext();



class AuthProvider extends React.Component {
    state = {
        user: null
    }

    handleRegister = (user) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/auth`, user)
            .then((res) => {
                this.setState({ user: res.data.data });
                resolve(res.data.status)
            })
            .catch((err) => reject(err));
        });
    }

    handleLogin = (user) => {
        return new Promise((resolve, reject) => {
            axios.post(`/api/auth/sign_in`, user)
            .then((res) => {
                console.log(res.data.data)
                this.setState({ user: res.data.data });
                resolve(res.data.status)
            })
            .catch((err) => reject(err));
        });
    }

    handleLogout = () => {
        return new Promise((resolve, reject) => {
            axios.delete(`/api/auth/sign_out`)
            .then((res) => {
                this.setState({ user: null });
                resolve(res.data.status)
            })
            .catch((err) => reject(err));
        });
    }
    
    authenticated = () => this.state.user !== null;

    setUser = (user) => {
        this.setState({ user })
    }



    render() {
        return (
            <AuthContext.Provider value={{        
                ...this.state,
                handleRegister: (user) => this.handleRegister(user),
                handleLogin: (user) => this.handleLogin(user),
                handleLogout: (user) => this.handleLogout(user),
                authenticated: () => this.authenticated(),
                setUser: (user) => this.setUser(user)}} >
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