import React from 'react';
import styled from "styled-components"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Flex = styled.div `
display:flex;

`
const ContactDiv = styled.div `
display:flex;
flex-direction:column;

width:100%;
margin:0 %;
padding:2rem 4rem;
border: solid silver 1.7px;
background-color:white;
`
const SetWidth = styled.div `
width:70%;
text-align:center;
height:20rem;

margin-left:8px
` 

const Skills = styled.div `
border: solid silver 1.7px;
margin-top:1.5rem;
height:20rem;
display: flex;
flex-direction:column;
align-items:center;
padding-top:5px;
background-color:white;
`


const AboutText =styled.div `
display: flex;
flex-direction:column;
justify-content:flex-start;
align-items:flex-start;
border: solid silver 1.7px;
height:20rem;
margin-left:5rem;
padding:1rem;
width:90%;
background-color:white;

`

const Main = (props) => {
    return (
        <Flex>
      <SetWidth className = 'FirstColumn'>
     <AboutText className = 'About'>
        <h2>About Me</h2>
        <p>i like to code blah blah i like to code blah blahi like to code blah blahi like to code blah blahi like to code blah blahi like to code blah blah</p>

        <p>blah blah more stuff about me blah blah</p>
        <p>blah blah more stuff about me blah blah</p>
     </AboutText>
      </SetWidth>



      <div className = 'SecondColumn'>

            <ContactDiv className = 'contact'>
                <div>
            <FontAwesomeIcon icon="location-arrow"  />  Alexandria, VA
            </div>
            <br></br>
            <div><FontAwesomeIcon icon="envelope"  /> Alanparker5123@gmail.com</div>
           <br></br>
            <div><FontAwesomeIcon icon="phone-alt"  /> (301)-855-6884</div>
            <br></br>
           <div> <FontAwesomeIcon icon={['fab', 'linkedin']} />  
           <a href = "https://www.linkedin.com/in/alan-parker-4b03601a3/"> Linkedin</a>
           
           </div>
             </ContactDiv>

             <Skills className = 'Skills'> 
                <h2> Skills </h2>
<p>lorem lorem lorem lorem lorem lorem</p>

             </Skills>

        </div>
      </Flex>
    );
  };
  
  export default Main;