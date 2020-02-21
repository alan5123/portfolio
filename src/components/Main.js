import React from 'react';
import styled from "styled-components"
import vrfunding from "../assests/vrfunding.PNG"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Flex = styled.div `
display:flex;

`

const SecondColumn = styled.div `
margin: 0 2%;
`
const ContactDiv = styled.div `
display:flex;
flex-direction:column;

width:100%;

padding:2rem 4rem;
border: solid silver 1.7px;
background-color:white;
@media (max-width: 500px){
    color:red;
    }
`
const FirstColumn = styled.div `
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

height:20rem;
margin-left:5rem;
padding:1rem;
width:90%;
background-color:white;

`

const VrDiv = styled.div `
border:solid red;
margin-left:5rem;
margin: 5rem;

padding: 2rem;
width:90%;
background-color:white;
border: solid silver 1.7px;
justify-content:flex-start;
display:flex;
flex-direction:column;
align-items:center;

`
const VrFunding = styled.img `
width:600px;
margin:3% 0;

`


const Main = (props) => {
    return (
        <Flex>
      <FirstColumn className = 'FirstColumn'>
     <AboutText className = 'About'>
        <h2>About Me</h2>
        <p>i like to code blah blah i like to code blah blahi like to code blah blahi like to code blah blahi like to code blah blahi like to code blah blah</p>

        <p>blah blah more stuff about me blah blah</p>
        <p>blah blah more stuff about me blah blah</p>
     </AboutText>

        <VrDiv>

        <div>
         <h2>First Build Week Project</h2>
         <VrFunding src={vrfunding} alt="Alan" />
        <p>Another student and i worked together for 5 days building marketing pages for a VR funding platform using just html and css. You can view it in more detail <a href = "https://vrfundingplatform.github.io/marketing-page/index.html">here</a></p>
    </div>

        </VrDiv>


      </FirstColumn>



      <SecondColumn className = 'SecondColumn'>

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

        </SecondColumn>
      </Flex>
    );
  };
  
  export default Main;