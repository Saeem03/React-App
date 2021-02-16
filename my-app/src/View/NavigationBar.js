import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import NavElement from "./NavElement";
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from "@fortawesome/free-solid-svg-icons";

export default function NavigationBar() {
  return (
      <div className="container-fluid">
        <Row>
           <Router>
              <ButtonGroup>
                <Link to="/Home"><FontAwesomeIcon icon={faHome} size='3x' color="white"  /></Link>
                <NavElement linkTo="/Saeem" linkName="About" />
                {/* <NavElement linkTo="/About" linkName="About" /> */}
              </ButtonGroup>
               <Switch>
                   <Route path='/Home' component={Home}/>
                   <Route path='/About' component={About}/>
                   <Route path='/Home' component={Home}/>
               </Switch>
           </Router>
           </Row>
      </div>
  )
}


 function Home() {
    return (
        <h1>HomePage</h1>
    )
}
 function About() {
    return (
        <h1>About</h1>
    )
}
