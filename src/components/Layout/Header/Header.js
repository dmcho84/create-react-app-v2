import React, { Component } from "react";
import { NavLink } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header className="header">
        <nav className="gnb">
          <NavLink exact={true} to="/">Home</NavLink>
          <NavLink exact={false} to="/about">About</NavLink>
          <NavLink exact={false} to="/game">Game</NavLink>
        </nav>
      </header>
    );
  }
}

export default Header;
