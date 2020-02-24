import React from 'react';
import styled from "styled-components";
import vrfunding from "../assests/vrfunding.PNG";
import nasa from "../assests/Nasa.PNG"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Flex = styled.div `
display:flex;
margin:0 3%;

@media (max-width: 800px){
  flex-direction:column-reverse
  }
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
    margin:0 auto;
    }
`
const FirstColumn = styled.div `
width:76%;
text-align:center;


@media (max-width: 800px){

  width:100%;
margin-top:2rem;
  
  text-align:center;

   }
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


margin-left:2.5rem;
padding:1rem;
width:90%;
background-color:white;
@media (max-width: 800px){
  width:95%;
  margin: 0 auto
   }

`

const VrDiv = styled.div `
border:solid red;
margin-left:2.5rem;
margin: 5rem 2.5rem;

padding: 2rem;
width:90%;
background-color:white;
border: solid silver 1.7px;
justify-content:flex-start;
display:flex;
flex-direction:column;
align-items:center;
@media (max-width: 800px){
  width:95%;
  margin: 5% auto
   }


`
const VrFunding = styled.img `
max-width: 100%;
  height: auto;
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
        <P>Hello my name is Alan Parker, I am a 21 year old Lambda Web Development student from Alexandria VA hoping to make this my career.</P>
<br></br>
        <P>So I chose the Lambda program because I was very interested in computers but didnt know what I wanted to do with them. A friend had told me about this program so I tried the pre-course for web development and I enjoyed it so much I decided I wanted to do this for a career. There is something really rewarding about building something from code.</P>
        <br></br>
        <p>During my free time I love playing video games, I also enjoy doing jiu jitsu although havent had time for it lately</p>
     </AboutText>

        <VrDiv>

        <div>
         <h2>First Build Week Project</h2>
         <VrFunding src={vrfunding} alt="Alan" />
        <p>Another student and I worked together for five days building marketing pages for a VR funding platform using just html and css. You can view it in more detail <a href = "https://vrfundingplatform.github.io/marketing-page/index.html">here</a></p>
    </div>


        </VrDiv>


        <VrDiv>
        <div>
         <h2>NASA Photo of The Day</h2>
         <VrFunding src={nasa} alt="Alan" />
        <p>This project i made a React app that updates itself every day with a different picture from NASA's photo of the day. You can view it in more detail <a href = "https://alan5123.github.io/nasa-photo-of-the-day/">here</a></p>
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