import React from "react";
import { withAuth } from "../providers/AuthProvider";



class Register extends React.Component {
    state = {  
        name: "",
        email: "",
        image: "https://robohash.org/your-name-here",
        messagingBackground: "street",
        password: "",
        passwordConfirmation: "",
    }

    handleSubmit = (event) => {
        const { name, email, password, image, messagingBackground, passwordConfirmation } = this.state;

        event.preventDefault();
        this.props.handleRegister({ 
            name,
            email,
            password,
            image,
            messaging_background: messagingBackground,
            password_confirmation: passwordConfirmation,
        })
        .then((res) => {
            console.log("user registered successfully");
            this.props.history.push(`/user/${this.props.user.id}`);
        })
        .catch((err) => console.log(err));
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    render() {
        return (
            <div className="form-container">
                <form className="register main-form" onSubmit={this.handleSubmit}>
                    <h1 className="main-form__heading" >Make Your Account</h1>
                    <input
                        className="main-form__input"
                        required 
                        type="name"
                        placeholder="Name"
                        name="name"
                        value={this.state.name}
                        onChange={this.handleChange}
                    />  
                    <input
                        className="main-form__input"
                        required 
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={this.state.email}
                        onChange={this.handleChange}
                    />  
                    <input
                        className="main-form__input"
                        required 
                        type="text"
                        placeholder="image url"
                        name="image"
                        value={this.state.image}
                        onChange={this.handleChange}
                    /> 
                    <select 
                        className="main-form__input"
                        name="messagingBackground" 
                        value={this.state.messagingBackground}
                        onChange={this.handleChange}
                    >
                    {/* ["metro", "flower", "glacier", "street", "overpass", "mountains", "control"] */}
                    <option className="option-metro"
                        value="street"
                    >Street</option>
                    <option 
                        value="flower"
                    >Flower</option>
                    <option 
                        value="control"
                    >Control Room</option>
                    <option 
                        value="mountains"
                    >Mountains</option>
                    <option 
                        value="glacier"
                    >Glacier</option>
                    <option 
                        value="overpass"
                    >Overpass</option>
                    <option 
                        value="metro"
                    >Metro</option>
                    </select>
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
                    <button type="submit" className="btn-white main-form__btn" > Register </button> 
                </form>
            </div>
        )
    }
}



export default withAuth(Register);