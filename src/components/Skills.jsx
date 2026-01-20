import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiLaravel,
  SiPhp,
  SiPython,
  SiJavascript,
  SiFigma,
  SiStyledcomponents,
  SiJsonwebtokens,
} from 'react-icons/si'
import { TbApi } from 'react-icons/tb'
import { FaGitAlt } from 'react-icons/fa'

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
  grid-template-columns: repeat(auto-fit, minmax(110px, 1fr));
  gap: 2rem;
`

const Card = styled(motion.div)`
  padding: 1.5rem 1rem;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 14px;
  text-align: center;
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.border};
  cursor: default;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`

const Icon = styled.div`
  font-size: 2.2rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.secondary};
`

const Label = styled.p`
  font-size: 0.85rem;
  font-weight: 500;
`

function Skills() {
  const skills = [
    { icon: <SiReact />, label: 'React' },
    { icon: <SiJavascript />, label: 'JavaScript' },
    { icon: <SiNodedotjs />, label: 'Node.js' },
    { icon: <SiExpress />, label: 'Express' },
    { icon: <SiMongodb />, label: 'MongoDB' },
    { icon: <SiMysql />, label: 'MySQL' },
    { icon: <SiLaravel />, label: 'Laravel' },
    { icon: <SiPhp />, label: 'PHP' },
    { icon: <SiPython />, label: 'Python' },
    { icon: <TbApi />, label: 'REST API' },
    { icon: <SiJsonwebtokens />, label: 'JWT Auth' },
    { icon: <SiStyledcomponents />, label: 'Styled Components' },
    { icon: <FaGitAlt />, label: 'Git' },
    { icon: <SiFigma />, label: 'Figma' },
  ]

  return (
    <Section id="skills">
      <Container>
        <Title>Skills</Title>

        <Grid>
          {skills.map((skill, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Icon>{skill.icon}</Icon>
              <Label>{skill.label}</Label>
            </Card>
          ))}
        </Grid>
      </Container>
    </Section>
  )
}

export default Skills
