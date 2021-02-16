import React from 'react'
import PersonCards from './SmallPieces/PersonCards'
import logo from "./SmallPieces/20210130_161640-01.jpeg";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import axios from 'axios';
import {Row,Container,Col} from 'react-bootstrap';

function Persons() {
    async function getUser() {
        try {
          const response = await axios.get('../../Data/Data.json');
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }
      getUser();
    return (
        <Container>
            <Row>
                <Col>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                <PersonCards src={logo}  name="Md Saeem Hossain Shanto"/>
                </Col>
            </Row>
        </Container>
    )
}

export default Persons
