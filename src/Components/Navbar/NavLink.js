import React, { Component } from 'react'
import { Nav } from 'react-bootstrap';

export class NavLink extends Component {
    render() {
        function changeBackground(e) {
            e.target.style.transition = "all 0.5s"
            if (e.type === "mouseover") {
                e.target.style.transform = "scale(1.4)";
                e.target.style.color = "gold";
                return;
            }
            e.target.style.transform = "scale(1.0)";
            e.target.style.color = "";
            return;
        }
        const { title, route, extraClasses } = this.props;
        return (
            <Nav.Link className={"mx-2 " + extraClasses ? extraClasses : ''} href={route} onMouseLeave={changeBackground} onMouseOver={changeBackground}>{title}</Nav.Link>
        )
    }
}

export default NavLink
