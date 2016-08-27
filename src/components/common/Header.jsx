import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Nav, NavItem, Button, DropdownButton, ButtonGroup, MenuItem, Modal, Input, Row, Col, OverlayTrigger, Popover, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';

import sticky from 'jquery-sticky';
var $ = require('jquery');


const Header = ({loggedIn, logout}) => {
    return (
       
        
        <Navbar>
             {/*<AppBar
            id="appbar"
            title="UHACK"
            
            iconElementRight= {<FlatButton onClick={logout} label="Logout" />}
        >
            <FlatButton label="About" style={{backgroundColor: "transparent"}} />
        </AppBar>*/}
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/" activeClassName="active">UHACK</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle/>
            </Navbar.Header>
            <Navbar.Collapse>
                <Nav>
                </Nav>
                <Nav id = "top-nav-collapse" pullRight>
                    <LinkContainer to= "/dashboard">
                        <MenuItem>Dashboard</MenuItem>
                    </LinkContainer>
                    <LinkContainer to= "/timeslots">
                        <MenuItem>Time Slots</MenuItem>
                    </LinkContainer>
                    <NavItem>Sean Yu</NavItem>
                    <NavDropdown eventKey={3} title='' id=''>
                        <MenuItem onClick={logout} eventKey= {3.2}>Logout</MenuItem>
                        <MenuItem eventKey= {3.3}></MenuItem>
                        <MenuItem divider/>
                        <MenuItem>Sample</MenuItem>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>   

        
    )
}

Header.propTypes = {
    loggedIn : React.PropTypes.bool.isRequired
}

export default Header;