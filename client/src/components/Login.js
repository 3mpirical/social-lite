import React from "react";
import { withAuth } from "../providers/AuthProvider";



class Login extends React.Component {
    state = {  
        email: "",
        password: "",
        passwordConfirmation: "",
    }

    handleSubmit = (event) => {
        const { email, password, passwordConfirmation } = this.state;
        event.preventDefault();

        if(password === passwordConfirmation) {
            this.props.handleLogin({ 
                email,
                password,
                password_confirmation: passwordConfirmation,
            })
            .then((res) => {
                console.log("user loggded in successfully");
                this.props.history.push(`/user/${this.props.user.id}`);
            })
            .catch((err) => console.log(err));
        } else {
            alert("Your Passwords Do Not Match");
        }

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="form-container">
                <form className="login main-form" onSubmit={this.handleSubmit}>
                    <h1 className="main-form__heading" >Welcome Back</h1>
                    <input
                        className="main-form__input"
                        required 
                        autoFocus
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />  
                    <input
                        className="main-form__input"
                        required 
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                    />  
                    <input
                        className="main-form__input"
                        required 
                        type="password"
                        placeholder="Password Confirmation"
                        name="passwordConfirmation"
                        value={this.state.passwordConfirmation}
                        onChange={this.handleChange}
                    /> 
                    <button type="submit" className="btn-white main-form__btn" > Login </button> 
                </form>
            </div>
        )
    }
}



export default withAuth(Login);