import React,{useState,useEffect} from 'react'
import PersonCards from './SmallPieces/PersonCards'
import logo from "./SmallPieces/20210130_161640-01.jpeg";
// import Container from 'react-bootstrap/Container'
// import Row from 'react-bootstrap/Row'
import axios from 'axios';
import {Row,Container,Col} from 'react-bootstrap';

function Persons() {
    const [person, setPerson] = useState([]);
    useEffect(() => {
      return () => {
         axios.get('https://raw.githubusercontent.com/Saeem03/React-App/main/my-app/Data/Data.json?token=AMKT4LI33OQLSJTSAZVQBY3AGVAOY')
          .then(function (response) {
            // handle success
            setPerson(response.data);

            console.log(typeof(response.data));
            console.log(response);


          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
          
        
    //   getUser();

      };
    },[setPerson] )
        return (
        <Container>
            <Row>
                <Col>
                {person.map(x => <h1>{x.name}</h1>)}
                {/* {console.log((person.name))}; */}
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
