import React from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import DetailsPage from '../../pages/DetailsPage';
import Home from '../../pages/Home';
import MoviesList from '../../pages/MoviesList';
import OutdoorEventsDetailsPage from '../../pages/OutdoorEventsDetailsPage';
import CardOwlCarousal from '../carousalComponents/CardOwlCarousal';




const MenuBar = () =>{
    return(
        <>
<BrowserRouter>

<Navbar collapseOnSelect expand="lg" className="menuBarMain p-0 py-1 m-0" variant="dark">
  <Navbar.Toggle aria-controls="responsive-navbar-nav" className="toggleIcon"/>

  <Navbar.Collapse id="responsive-navbar-nav">

      <div className="d-flex justify-content-center align-item-center toggleCloserForMobile ">
          <Navbar.Brand  className="mr-auto" href="/">TICGET</Navbar.Brand>
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className="ml-auto toggleIcon p-0 m-0 mr-3">
              <i className="fa fa-times-circle fa-2x"></i>
           </Navbar.Toggle>
      </div>

    <Nav className="mr-auto">
      <Nav.Link className="menuItems" href="/explore-all/movies">Movies</Nav.Link>
      <Nav.Link className="menuItems" href="/explore-all/premiers">Premiers</Nav.Link>
      <Nav.Link className="menuItems" href="/explore-all/out-door-events">Out Door Events</Nav.Link>
      {/* <Nav.Link className="menuItems" href="#pricing">Plays</Nav.Link>
      <Nav.Link className="menuItems" href="#features">Sports</Nav.Link>
      <Nav.Link className="menuItems" href="#pricing">Activities</Nav.Link>
      <Nav.Link className="menuItems" href="#features">Fanhood</Nav.Link>
      <Nav.Link className="menuItems" href="#pricing">Buzz</Nav.Link> */}
    </Nav>

    {/* <Nav className="ml-auto">
      <Nav.Link className="menuItems" href="#features1">ListYourShow</Nav.Link>
      <Nav.Link className="menuItems" href="#pricing1">Corporates</Nav.Link>
      <Nav.Link className="menuItems" href="#pricing1">Offers</Nav.Link>
      <Nav.Link className="menuItems" href="#pricing1">Gift Cards</Nav.Link>
    </Nav> */}
    
  </Navbar.Collapse>
</Navbar>
<CardOwlCarousal/> 

<Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies/:slug" component={DetailsPage} /> 
        <Route exact path="/out-door-events/:slug" component={OutdoorEventsDetailsPage} />
        <Route exact path="/explore-all/:what" component={MoviesList} />
</Switch>
</BrowserRouter>
        </>
    )
}
export default MenuBar;