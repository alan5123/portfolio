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


margin-left:8px

` 

const Skills = styled.div `
border: solid silver 1.7px;
margin-top:1.5rem;



padding-top:5px;

background-color:white;
`


const AboutText =styled.div `

flex-direction:column;
justify-content:flex-start;
align-items:flex-start;


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

const P = styled.p `
font-size:18px;

`

const CenterText = styled.h2 `
text-align:center;
`



const Main = (props) => {
    return (
        <Flex>
      <FirstColumn className = 'FirstColumn'>
     <AboutText className = 'About'>
        <h2>About Me</h2>
        <P>Hello my name is Alan Parker, i am a 21 year old Lambda Web Development student from Alexandria VA hoping to make this my career.</P>
<br></br>
        <P>So i chose the Lambda program because i was very interested in computers but didnt know what i wanted to do with them. A friend had told me about this program so i tried the pre-course for web development and i enjoyed it so much i decided i wanted to do this for a career. There is something really rewarding about building something from code.</P>
        <br></br>
        <p>During my free time i love playing video games, i also enjoy doing jiu jitsu although havent had time for it lately</p>
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
                <CenterText> Skills </CenterText>
<ul>
    <li>Git</li>
    <li>HTML</li >
    <li>CSS</li>
    <li>Javascript</li>
    <li>Less</li>

    <li>Currently Learning React</li>
</ul>

             </Skills>

        </SecondColumn>
      </Flex>
    );
  };
  
  export default Main;