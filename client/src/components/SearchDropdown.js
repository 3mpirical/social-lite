import React from "react";
import { Link } from "react-router-dom";


class SearchDropdown extends React.Component{

    renderResults = () => {
        return this.props.results.map((user) => {
            return (
                <Link to={`/user/${user.id}`} className="result" key={user.id} >
                    { user.name }
                </Link>
            )
        })
    }

    render() {
        if(this.props.display) {
            return (
                <div className="search-dropdown__container">
                     { this.renderResults() }
                </div>
            )
        } 
        return null;
    }
}



export default SearchDropdown;