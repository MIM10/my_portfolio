import { useState } from 'react'
import ProjectModal from './ProjectModal'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiExternalLink, FiEye, FiGithub } from 'react-icons/fi'

import { campgear1, campgear2, campgear3, campgear4, campgear5, campgear6, campgear7, campgear8, campgear9, campgear10, campgear11, campgear12, campgear13, campgear14, campgear15, campgear16, campgear17, campgear18, campgear19, campgear20, projectFetrum1, projectFetrum2, projectFetrum3, projectFetrum4, projectFetrum5, projectFetrum6, hni1, hni2, hni3, hni4, hni5 } from '../assets'


const Section = styled.section`
  padding: 6rem 3rem 4rem;

    @media (max-width: 768px) {
        padding: 6rem 0 0 0;
    }
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 3rem;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  border-radius: 16px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.06);
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  object-fit: contain;
  height: 160px;
  background: ${({ theme }) => theme.colors.card};
`

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
`

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`

const Stack = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem 1.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const ActionLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-size: 0.85rem;
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.primary};

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`

function Projects() {

    const [selected, setSelected] = useState(null)
    const projects = [
        {
            title: 'CampGear Mobile App',
            status: 'Completed',
            description:
                'CampGear is a mobile commerce application developed as the final project of the MBKM Independent Study program at NFA. The application focuses on outdoor equipment purchasing with real-world e-commerce features and a scalable backend architecture.',
            picture: campgear1,
            screenshots: [campgear1, campgear2, campgear3, campgear4, campgear5, campgear6, campgear7, campgear8, campgear9, campgear10, campgear11, campgear12, campgear13, campgear14, campgear15, campgear16, campgear17, campgear18, campgear19, campgear20],
            features: [
                'Product catalog browsing',
                'Real-time chat between user and admin',
                'Shopping cart and checkout',
                'Order history and tracking',
                'Admin dashboard',
                'Full CRUD product management',
            ],
            stack: 'Flutter • Laravel REST API • Firebase • MySQL',
            learning:
                'Developing a real-world mobile application, integrating Flutter with REST APIs, managing authentication, real-time features, and designing scalable backend systems.',
            github: 'https://github.com/Auliarahmannn/Kelompok7_MAD',
            demo: 'https://www.figma.com/design/jKwT5zOyQ8JIunXnv8M9xj/MAD_CampGear?node-id=0-1&t=QCeFWAmOfC9ku75f-1',
        },
        // {
        //     title: 'Clinic Santri App',
        //     status: 'In Progress',
        //     description:
        //         'Klinik Santri is a web-based clinic management system requested by a pesantren to record and manage patient visits. The system is designed to simplify data entry, authentication, and daily clinic operations.',
        //     picture: clinic1,
        //     screenshots: [clinic1, clinic2, clinic3],
        //     features: [
        //         'Authentication system',
        //         'Patient data management',
        //         'Clinic visit records',
        //         'Form-based data input',
        //         'CRUD operations',
        //     ],
        //     stack: 'React • Node.js • Express • MySQL',
        //     learning:
        //         'Handling real client requirements, designing backend APIs, implementing authentication, and managing relational databases in a fullstack web application.',
        //     github: '#',
        //     demo: null,
        // },
        {
            title: 'FeTrum',
            status: 'Completed',
            description:
                'FeTrum is a responsive ferry and cruise ticket booking website developed as a team final project for the Web Programming course. I contributed primarily to the frontend implementation, focusing on responsive layouts and user flows.',
            picture: projectFetrum1,
            screenshots: [projectFetrum1, projectFetrum2, projectFetrum3, projectFetrum4, projectFetrum6, projectFetrum5],
            features: [
                'Responsive ticket booking interface',
                'Destination catalog',
                'Ticket ordering flow',
                'Admin dashboard',
                'Login and registration system',
            ],
            stack: 'HTML • SCSS • JavaScript • Node.js',
            learning:
                'Collaborating in a team environment, building responsive interfaces, and understanding real-world frontend workflows.',
            github: 'https://github.com/MIM10/pw23-finalproject',
            demo: 'https://pw23-finalproject-fetrum.vercel.app/',
        },
        {
            title: 'HNI Landing Page',
            status: 'Completed',
            description:
                'A simple product landing page developed as an individual midterm project, focusing on layout structure, carousel components, and basic interactivity.',
            picture: hni1,
            screenshots: [hni1, hni2, hni3, hni4, hni5],
            features: [
                'Product landing layout',
                'Image carousel',
                'Responsive design',
            ],
            stack: 'HTML • CSS • JavaScript',
            learning:
                'Building clean layouts, implementing basic UI interactions, and understanding responsive design fundamentals.',
            github: 'https://github.com/MIM10/pw23-project1',
            demo: 'https://pw23-project1-hni.vercel.app/',
        },
    ]

    return (
        <Section id="projects">
            <Container>
                <Title>Projects</Title>

                <Grid>
                    {projects.map((project, index) => (
                        <Card
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <Image src={project.picture} alt={project.title} />

                            <Content>
                                <ProjectTitle>{project.title}</ProjectTitle>
                                <Description>{project.description}</Description>
                                <Stack>{project.stack}</Stack>
                            </Content>

                            <Actions>
                                <ActionLink onClick={() => setSelected(project)}>
                                    <FiEye /> Details
                                </ActionLink>
                                <ActionLink href={project.github} target="_blank">
                                    <FiGithub /> Code
                                </ActionLink>
                                <ActionLink href={project.demo} target="_blank">
                                    <FiExternalLink /> Live
                                </ActionLink>
                            </Actions>
                        </Card>
                    ))}
                </Grid>
                <ProjectModal
                    project={selected}
                    onClose={() => setSelected(null)}
                />
            </Container>
        </Section>
    )
}

export default Projects
