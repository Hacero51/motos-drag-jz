import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import Slider from './carousel';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }
}));

function Header() {


  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [dropDown, setDropDown] = useState(false)

  const handleClick = () => {
    dropDown ? setDropDown(false) : setDropDown(true)
    console.log('this is dropDown', dropDown)
  }
  const arrowPosition = dropDown ? 'open' : 'closed'
  const descriptionActive = dropDown ? 'open' : ''

  const classes = useStyles();

  return (
    <>
      <div className="container">
        <header>
          <section className="header-nav-area">
            <div className="brand_area">
              <img src="logo.png" width="150" height="55" class="d-inline-block align-top" alt="" />
            </div>
            <Navbar collapseOnSelect expand="lg">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mr-auto">
                </Nav>
                <Nav className="mr-auto">
                  <Link to="/" className="nav-link" ><h4>Home</h4></Link>
                  <Link to="/Motopartes" className="nav-link" ><h4>MotoPartes</h4></Link>
                  <Link to="/Accesorios" className="nav-link" ><h4>Accesorios</h4></Link>
                  <Link to="/Quienesomos" className="nav-link"><h4>Quienes Somos</h4></Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </section>
          <Slider />
        </header>
        
      </div>
      <br />
      <br />

    </>
  )
}

export default Header