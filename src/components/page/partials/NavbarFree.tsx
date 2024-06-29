import { Component } from "react";
import { Link } from "react-router-dom";

export class NavbarFree extends Component {
    render = () => {
        return (
            <div className="row nav-free shadow">
                <div className="col">
                    <Link to="/acc/login">
                        <img className="logo" src="\public\assets\images\txllogo.png" />
                    </Link>
                </div>
            </div>
        )
    }
}