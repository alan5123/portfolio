import React from 'react';
import styled from "styled-components"
import Alan from "../assests/Me.jpg"


const JumboHeader= styled.div `
background-color:white;
margin: 5% ;
border-radius:20px;
display:flex;
`
const JumboHeaderTwo= styled.div `
width:100%;
display:flex;

`


const Picture = styled.img `
height: 20rem;
width:13rem;
border-radius:35px;
margin-right:5%;
margin-left 5px;
margin:1%;
border: solid silver 1.7px;
@media (max-width: 440px){
  display:none;
   }
`

const Text = styled.div `
display:flex;
justify-content:flex-end;
flex-direction:column


`

const TextName = styled.h2 `
color:black;
@media (max-width: 440px){
  font-size:4rem;
  font-weight: 350;
   }
`

const TextOne = styled.p `
font-size:40px;
color:black;
border-bottom: solid black;
font-weight: 450;
@media (max-width: 440px){
  font-weight: 350;
  width:90%;
   }
`


const Header = (props) => {
  return (
    
      <JumboHeader fluid>
        <JumboHeaderTwo fluid>
        <Picture src={Alan} alt="Alan" />
        <Text>
          <TextName className="display-3">Alan Parker Jr</TextName>
          <TextOne className="lead">Web Developer</TextOne>
          </Text>
        </JumboHeaderTwo>
      </JumboHeader>
   
  );
};

export default Header;