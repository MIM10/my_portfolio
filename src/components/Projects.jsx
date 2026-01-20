import { useState } from 'react'
import ProjectModal from './ProjectModal'

import styled from 'styled-components'
import { motion } from 'framer-motion'
import { FiExternalLink, FiEye, FiGithub } from 'react-icons/fi'

import { clinic1, clinic2, clinic3 } from '../assets'


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
  object-fit: cover;
  height: 160px;
  background: #e5e7eb;
`

const Content = styled.div`
  padding: 1.5rem;
  flex: 1;
`

const ProjectTitle = styled.h4`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
`

const Description = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.6;
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
            title: 'Clinic Santri App',
            status: 'In Progress',
            description:
                'A fullstack web application for managing santri clinic visits and patient records.',
            picture: clinic1,
            screenshots: [clinic1, clinic2, clinic3],
            features: [
                'Authentication & role-based access',
                'CRUD patient and visit data',
                'Dashboard for clinic staff',
            ],
            stack: 'React • Node.js • Express • MySQL',
            learning:
                'Designing database relations, handling real-world CRUD flows, and structuring backend APIs.',
            github: '#',
            demo: '#',
        },
        {
            title: 'Data Visualization Dashboard',
            status: 'Completed',
            description:
                'Interactive dashboard for visualizing public datasets using Python.',
            picture: clinic2,
            screenshots: [clinic1, clinic2, clinic3],
            features: [
                'Bar, line, and pie charts',
                'Filtering and aggregation',
                'Clean data presentation',
            ],
            stack: 'Python • Streamlit',
            learning:
                'Transforming raw data into insights and building interactive visualizations.',
            github: '#',
            demo: '#',
        },
        {
            title: 'Personal Portfolio',
            status: 'Completed',
            description:
                'My personal developer portfolio showcasing projects, skills, and experience.',
            picture: clinic3,
            screenshots: [clinic1, clinic2, clinic3],
            features: [
                'Responsive design',
                'Dark mode',
                'Smooth animations',
            ],
            stack: 'React • Vite • Styled Components',
            learning:
                'Building a scalable UI system with theming and reusable components.',
            github: '#',
            demo: '#',
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
