import { useState } from 'react'
import { projects } from '../../data/constants'
import ProjectCard from '../Cards/ProjectCard'
import { CardContainer, Container, Desc, Title, ToggleButton, ToggleButtonGroup, Wrapper } from './ProjectsStyle'


const Projects = ({openModal,setOpenModal}) => {
  const [toggle, setToggle] = useState('all');


  const handleToggleClick = () => {
    setToggle('all');
    setOpenModal(true); // Opens the modal showing dashboard
  };

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          I have worked on a wide range of projects. Here are some of my projects.
        </Desc>
        <ToggleButtonGroup >
          {toggle === 'all' ?
            <ToggleButton 
            active={toggle === 'all'} 
            value="all" 
            onClick={handleToggleClick}
          >
            All
          </ToggleButton>
            :
            <ToggleButton value="all" onClick={() => setToggle('all')}>All</ToggleButton>
          }
          
        </ToggleButtonGroup>
        <CardContainer>
          {toggle === 'all' && projects
            .map((project) => (
              <ProjectCard project={project}
               openModal={openModal}
                setOpenModal={setOpenModal}/>
            ))}
          
        </CardContainer>
      </Wrapper>
    </Container>
  )
}

export default Projects