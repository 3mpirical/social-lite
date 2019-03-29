import React from "react";
import { Route, Redirect } from "react-router-dom";
import { withAuth } from "../providers/AuthProvider";


const ProtectedRoute = ({ component, authenticated, ...rest }) => {
    const Component = component;
    return(
        <Route {...rest}
            render={(props) => (
                authenticated()? 
                <Component {...props} />
                : ( 
                    <Redirect 
                        to={{
                            pathname: "/login",
                            state: { from: props.location },
                        }}
                    />
                )
            )}
        />
    )
};



export default withAuth(ProtectedRoute);