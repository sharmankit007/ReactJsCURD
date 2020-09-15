/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import RestaurantCreate from "./components/RestaurantCreate";
// eslint-disable-next-line no-unused-vars
import RestaurantDetail from "./components/RestaurantDetail";
import RestaurantList from "./components/RestaurantList";
import RestaurantSearch from "./components/RestaurantSearch";
import RestaurantUpdate from "./components/RestaurantUpdate";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, FormControl } from 'react-bootstrap';
import { Navbar, Nav } from "react-bootstrap";
function App() {
  return (
    <div className="App">
      <Router>
      <Navbar bg="light" expand="lg">
  <Navbar.Brand href="/">Home</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="/create">Create</Nav.Link>

      <Nav.Link href="/list">List</Nav.Link>
      <Nav.Link href="/search">Search</Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
</Navbar>

        <Route path="/create">
          <RestaurantCreate />
		</Route>
		<Route path="/list">
          <RestaurantList />
		</Route>
		<Route path="/search">
          <RestaurantSearch />
		</Route>
    <Route path="/update/:id"
    render={props =>(
      <RestaurantUpdate {...props}/>
    )}
    >

		</Route>
		<Route exact path="/">
          <Home />
        </Route>
      </Router>
    </div>
  );
}

export default App;
