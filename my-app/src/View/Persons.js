import React,{useState,useEffect} from 'react'
import PersonCards from './SmallPieces/PersonCards'
import logo from "./SmallPieces/20210130_161640-01.jpeg";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import axios from 'axios';
import {Row,Container,Col} from 'react-bootstrap';

function Persons() {
     function GetAllUSers() {
        axios.get('https://raw.githubusercontent.com/Saeem03/React-App/main/my-app/Data/Data.json?token=AMKT4LI33OQLSJTSAZVQBY3AGVAOY')
             .then(response => {
                console.log("response",(response.data));
                SetUserData(response.data);
            }).catch(error => {
                console.log(error);
            })
        }
    const [person, SetUserData] = useState();
    useEffect(() => {
        GetAllUSers();
      return () => {
        GetAllUSers();

      };
    },[SetUserData] )
        return (
        <Container>
            <Row>
                <Col>
                {console.log("in",{person})};
                <h1>{person}</h1>
                {console.log((typeof({person})))};
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
