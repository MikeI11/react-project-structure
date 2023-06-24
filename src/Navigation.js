import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

export default class Navigation extends Component {
    render() {
        return (
            <header>
                <ul className="navigation-items">
                    <li className="navigation-item">
                        <Link to="/" className="navigator-link">Los Angeles</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/chicago" className="navigator-link">Chicago</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/paris" className="navigator-link">Paris</Link>
                    </li>
                    <li className="navigation-item">
                        <Link to="/lviv" className="navigator-link">Lviv</Link>
                    </li>
                </ul>
            </header>
        )
    }
}