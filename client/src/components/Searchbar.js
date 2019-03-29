import React from "react";
import axios from "axios";
import { withAuth } from "../providers/AuthProvider";
import SearchDropdown from "./SearchDropdown";


class Searchbar extends React.Component {
    state = { input: "", results: [], display: false }

    timeout = null;

    componentDidMount() {
        document.addEventListener("click", (event) => {
          if(event.target.matches(".searchbar") || event.target.matches(".search-dropdown__container")){
              return null
          } else {
              this.setDisplayFalse();
          }
        })
      }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        clearTimeout(this.timeout);

        this.timeout = setTimeout(() => {
            const input = this.state.input;
            axios.post(`/api/search/users`, { input })
            .then((res) => {
                this.setState({ results: res.data });
            })
            .catch((err) => console.log(err));
        }, 400);
    }

    handleFocus = (event) => {
        axios.post(`/api/search/users`, { input: this.state.input })
        .then((res) => {
            this.setState({ results: res.data });
            this.setDisplayTrue();
        })
        .catch((err) => console.log(err));
    }

    setDisplayTrue = () => {
        this.setState({ display: true })
    }

    setDisplayFalse = () => {
        this.setState({ display: false })
    }

    render() {
        return (
            <>
                <form 
                    className="searchbar__container" 
                    onSubmit={(event) => event.preventDefault()} 
                >
                    <input 
                        className="searchbar btn-white"
                        placeholder="... user name"
                        name="input"
                        value={this.state.input}
                        onChange={this.handleChange}
                        onFocus={this.handleFocus}
                        ></input>
                </form>
                <SearchDropdown results={this.state.results} display={this.state.display} />
            </>
        )
    }
}



export default withAuth(Searchbar);