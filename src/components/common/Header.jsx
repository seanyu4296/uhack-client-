import React, {PropTypes} from 'react';
import {Link, IndexLink} from 'react-router';
import {Navbar, Nav, NavItem, Button, DropdownButton, ButtonGroup, MenuItem, Modal, Input, Row, Col, OverlayTrigger, Popover, NavDropdown} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';


const Header = ({loggedIn, logout}) => {
    return (
        <AppBar
            id="appbar"
            title="UHACK"
            
            iconElementRight= {<FlatButton onClick={logout} label="Logout" />}
        >
            {/*<FlatButton label="About" style={{backgroundColor: "transparent"}} />*/}
        </AppBar>
        /*<Navbar >
            <Navbar.Header>
                <Navbar.Brand>
                    <IndexLink to="/" activeClassName="active">UHACK</IndexLink>
                </Navbar.Brand>
                <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
            <Nav>
            </Nav>
            <Nav pullRight>
                <NavItem>Sean Yu</NavItem>
                <NavDropdown eventKey={3} title='' id=''>
                    <MenuItem onClick={logout} eventKey= {3.2}>Logout</MenuItem>
                    <MenuItem eventKey= {3.3}></MenuItem>
                    <MenuItem divider/>
                    <MenuItem>Sample</MenuItem>config : {
                chart : {
                        defaultSeriesType : "line"
                    },
                title : {
                    text : "SAMPLE CHART"
                },
                xAxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
                },
                series: [{
                    data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 295.6, 454.4]
                }]
            }
                </NavDropdown>
            </Nav>
            </Navbar.Collapse>
        </Navbar>*/
    )
}

Header.propTypes = {
    loggedIn : React.PropTypes.bool.isRequired
}

export default Header;