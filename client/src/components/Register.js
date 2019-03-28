import React from "react";
import { withAuth } from "../providers/AuthProvider";



class Register extends React.Component {
    state = {  
        email: "",
        password: "",
        passwordConfirmation: "",
    }

    handleSubmit = (event) => {
        const { email, password, passwordConfirmation } = this.state;

        event.preventDefault();
        this.props.handleRegister({ 
            email,
            password,
            password_confirmation: passwordConfirmation,
        })
        .then((res) => {
            console.log("user registered successfully");
            this.props.history.push("/");
        })
        .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="form-container">
                <form className="register" onSubmit={this.handleSubmit}>
                    <h1>Make Your Account</h1>
                    <input
                        required 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />  
                    <input
                        required 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />  
                    <input
                        required 
                        type="password"
                        placeholder="Password Confirmation"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.handleChange}
                    /> 
                    <button type="submit" className="btn-white" > Register </button> 
                </form>
            </div>
        )
    }
}



export default withAuth(Register);