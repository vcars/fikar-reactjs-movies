import React, { Component } from "react";
import "./Menu.css";
import Logo from "../../assets/images/logo.png";
import Search from "../../assets/images/search.png";
import {Link} from "react-router-dom"

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  goHome = () => {
    this.props.history.push("/");
  };

  handleSeacrh = (key) => {
    
    this.props.history.push(`?search=${key}`);
  };
  render() {
    const { handleChange, getDataSearch, handleSubmit } = this.props;
    return (
      <header>
        <div className="container-menu">
        <Link to="/">
        <img
            src={Logo}
            alt=""
            // onClick={() => {
            //   this.goHome();
            // }}
          />
        </Link>
         
          <div className="search">
            <form onSubmit={handleSubmit}>
              <input
                id="search"
                type="text"
                placeholder="Cari disini..."
                onChange={handleChange}
                //   onChange={(event) => this.handleSeacrh(event.target.value)}
              />
            </form>
            <div>
            <button type="button" className="button-search" />
                <img
                 className="icon-search"
                 src={Search}
                 type="submit"
                 onClick={handleSubmit}
                />
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Menu;
