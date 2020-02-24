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
width:15rem;
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
justify-content:center;
flex-direction:column;
align-items:center;
width:75%;


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
const ContactMe = styled.a `
background-color:lightsteelblue;
font-size:26px;
border-radius:10px;
width:10rem;
height:3rem;
border:none;
font-weight:bold;
text-align:Center;
color:black;
:hover{
  color:black;
  text-decoration:none;
}

`
const ContactDiv = styled.div `
display:Flex;
justify-content:center;
align-items:center;
margin-right:20%;
@media (max-width: 800px){
  margin:0 5%;
   }

   @media (max-width: 800px){
    display:none;
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
          <ContactDiv >
          <ContactMe  href="mailto:alanparker5123@gmail.com">Contact Me</ContactMe >
          </ContactDiv >
        </JumboHeaderTwo>
      </JumboHeader>
   
  );
};

export default Header;