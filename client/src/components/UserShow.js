import React from "react";
import { withAuth } from "../providers/AuthProvider";


class UserShow extends React.Component {
    render() {
        const { user } = this.props;
        console.log(this.props)
        return(
            <>
                <div className="wallpaper" style={ user && {backgroundImage: `url(../images/${user.messaging_background}.jpg)`}} ></div>
                <div className="user-show-container">
                    User Show Page
                </div>
            </>

        )
    }
}



export default withAuth(UserShow);