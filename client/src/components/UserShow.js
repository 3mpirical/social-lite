import React from "react";
import { withAuth } from "../providers/AuthProvider";
import axios from "axios";


class UserShow extends React.Component {
    state = { user: null, current_user: false }

    componentDidMount() {
        console.log(this.props.user)
        if(parseInt(this.props.match.params.id) !== this.props.user.id) {
            axios.get(`/api/search/users/${this.props.match.params.id}`)
            .then((res) => {
                console.log(res.data)
                this.setState({ user: res.data });
            })
            .catch((err) => console.log(err));

        } else {
            this.setState({ user: this.props.user, current_user: true });
        }
    }

    render() {
        const { user } = this.state;
        if(!user) {
            return null
        } else {
            return(
                <>
                    <div className="wallpaper" style={ user && {backgroundImage: `url(../images/${user.messaging_background}.jpg)`}} ></div>
                    <div className="user-show-container">
                        <img 
                            src={user.image} 
                            alt="user picture" 
                            className="user-show__user-picture" 
                        />
                        <br />
                        <h2 className="user-show__user-name" >{user.name}</h2>
                    </div>
                </>
    
            )
        }
    }
}



export default withAuth(UserShow);