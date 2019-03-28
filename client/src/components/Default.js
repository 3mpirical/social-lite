import React from "react";

const Default = (props) => {
    return (
        <>
            <h1>I'm Sorry, but this route does not exist.</h1>
            <button 
                className="btn-white" 
                onClick={() => props.history.goBack()} 
            >Go Back?</button>
        </>
    )
}

export default Default;