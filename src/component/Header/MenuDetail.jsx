import React, { Component } from "react";
import "./Menu.css";
import Logo from "../../assets/images/logo.png";
import {Link} from "react-router-dom"

class Menu extends Component {
  constructor(props) {
    super(props);
  }

  goHome = () => {
    this.props.history.push("/");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSeacrh = (key) => {
    
    this.props.history.push(`?search=${key}`);
  };
  render() {
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
         
        </div>
      </header>
    );
  }
}

export default Menu;
