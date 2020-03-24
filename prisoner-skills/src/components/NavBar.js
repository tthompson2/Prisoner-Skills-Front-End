import React, { useState } from 'react';
import { NavbarBrand, Nav, NavItem, NavLink, Collapse, NavbarToggler, Navbar} from "reactstrap";
import logo from '../Images/streemly_logo.png';
import icon from '../Images/hamburger_icon.png';
import { getToken } from '../utils/getToken';

const NavBar = () => {

    const [collapsed, setCollapsed] = useState(false);
    const toggleNavBar = () => setCollapsed(!collapsed);

    const menuClick = () => {
        console.log(collapsed);
        setCollapsed(collapsed);
    }
    const loggedIn = getToken()

    return (

        <div>
            <Navbar className="streemly-red">
                <NavbarBrand href="/contacts" className="mr-auto"><img className="streemly-logo" src={logo} width='120' height='50' alt="guider logo" /></NavbarBrand>
                <NavbarToggler onClick={toggleNavBar} className="mr-2">
                    <img className="streemly-logo" src={icon} width='120' height='50' alt="guider logo" />
                </NavbarToggler>
                <Collapse isOpen={collapsed} onClick={menuClick}>
                    <Nav navbar>
                        {!loggedIn &&
                            <NavItem className="streemly-red2">
                                <NavLink href="/SignUp">Sign Up</NavLink>
                            </NavItem>}
                        {!loggedIn &&
                            <NavItem className="streemly-red2">
                                <NavLink href="/LoginPage">Login</NavLink>
                            </NavItem>}
                        {loggedIn &&
                            <NavItem>
                                <NavLink href="/logout">Log Out</NavLink>
                            </NavItem>}
                        {/* {loggedIn &&
                            <NavItem className="streemly-red2">
                                <NavLink href="/directory">Directory</NavLink>
                            </NavItem>}
                        {loggedIn &&
                            <NavItem>
                                <NavLink href="/addform">Add Contact</NavLink>
                            </NavItem>} */}
                        {!loggedIn &&
                            <NavItem>
                                <NavLink href="https://prisoner-skill.now.sh/">Marketing Page</NavLink>
                            </NavItem>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;