import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Button from "react-bootstrap/Button";

import ReactDOM from 'react-dom'

function NavElement(props) {
    return (
        <>
            <Button type="button" variant="secondary" size="md"  ><Link  to={props.linkTo} style={{ textDecoration: 'none',color:"cyan"}}><>{props.linkName}</></Link></Button>{'          '}
        </>
        )
    }
    
    export default NavElement
