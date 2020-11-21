import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import {Navbar,Nav,NavDropdown,FormControl,Form,Button} from 'react-bootstrap';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

const Profile=()=>{

    return(
        <div><Navbar  expand="lg">
        <Navbar.Brand href="#home">Rexzet Solutions</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/About Us">About Us</Nav.Link>
            <Nav.Link href="/Gallery">Gallery</Nav.Link>
            
          </Nav>
          <Nav className="mr-right " style={{marginRight:"6rem"}}>
          <NavDropdown title={<Avatar alt="Vemy Sharp" src="../assets/11.jpg" />} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Dashboard</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      
      </div>
        
    );
}
export default Profile;