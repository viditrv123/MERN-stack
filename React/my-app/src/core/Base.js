import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Base.css';
import { isAuthenticated, Logout } from '../auth/helper/index';
import Avatar from '@material-ui/core/Avatar';
import { Navbar, Nav, NavDropdown, FormControl, Form, Button } from 'react-bootstrap';
import { Redirect, Route, Router } from 'react-router-dom';






const Base = ({ children }) => {
  if (!isAuthenticated()) {
    return (
      <div>
        <header className="header">
          <h1>Start. Build. Grow.</h1>
        </header>
        <nav className="navbar navbar-expand-lg navbar-light">
          <a className="navbar-brand" href="/">Rexzet Solution</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About Us">About Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Gallery">Gallery</a>
              </li>


            </ul>

            <ul className="navbar-nav mr-right">
              <li className="nav-item">
                <a className="nav-link" href="/Register">Register</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/Login">Login</a>
              </li>



            </ul>
          </div>
        </nav>




        {children}
        <footer>
          <h6>Developed by Vidit Singh Gautam</h6>
        </footer>
      </div>
    );
  }
  else {
    return (
      <div>
        <header className="header">
          <h1>Start. Build. Grow.</h1>
        </header>
        <Navbar style={{ padding: "1rem" }}>
          <Navbar.Brand href="#home">Rexzet Solutions</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/About Us">About Us</Nav.Link>
              <Nav.Link href="/Gallery">Gallery</Nav.Link>

            </Nav>
            <span>
            <Nav className="mr-right " style={{ marginRight: "6rem" }}>
              <NavDropdown title={<Avatar alt="Vemy Sharp" src="../assets/11.jpg" />} id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                <NavDropdown.Item href="/Profile">Profile</NavDropdown.Item>
                <NavDropdown.Item href="/Dashboard">Dashboard</NavDropdown.Item>
                <NavDropdown.Item  onClick={()=>{
                  Logout(()=>{
                    this.history.push("/");
                  })
                }}>Logout</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            </span>

          </Navbar.Collapse>
        </Navbar>
        {children}
        <footer>
          <h6>Developed by Vidit Singh Gautam</h6>
        </footer>
      </div>



    );
  }
}


export default Base;