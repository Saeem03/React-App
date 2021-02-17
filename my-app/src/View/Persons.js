import React,{useState,useEffect} from 'react'
import PersonCards from './SmallPieces/PersonCards'
import logo from "./SmallPieces/20210130_161640-01.jpeg";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import axios from 'axios';
import {Row,Container,Col} from 'react-bootstrap';

function Persons() {
    const [person, SetUserData] = useState({});
     
    useEffect(() => {
        GetAllUSers();
      return () => {

      };
    },[SetUserData] );

    function GetAllUSers() {
        axios.get('https://raw.githubusercontent.com/Saeem03/React-App/main/my-app/Data/test.json?token=AMKT4LIFAE4247U6TDIUAHDAGXSOM')
             .then(response => {
                 // console.log("response data",typeof(response.data));
                 console.log("response",typeof(response),(response));
                 console.log("response data",typeof(response.data),response.data);
                // console.log("response",typeof(response));
                // SetUserData(response);
            }).catch(error => {
                console.log(error);
            })
        }

    return (
    <Container>
        <Row>
            <Col>
            {/* {console.log("in",{person.data})}; */}
            {/* {console.log((typeof({person})))}; */}
            {/* <h1>{JSON.stringify(person)}</h1> */}
            {/* <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
            <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
            <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
            <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/> */}
            </Col>
        </Row>
    </Container>
)

}

export default Persons
