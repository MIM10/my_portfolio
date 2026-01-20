import styled from 'styled-components'
import { motion } from 'framer-motion'

const Section = styled.section`
  min-height: calc(100vh - 800px);
  padding: 6rem 3rem 4rem;

  @media (max-width: 768px) {
    padding: 6rem 0 0 0;
  }
`

const Container = styled.div`
  max-width: 100%;
  margin: 0;
`

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.primary};
`

const Content = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 3rem;

  @media (max-width: 1068px) {
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`

const Card = styled(motion.div)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.border};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
  }
`

const CardText = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.8;
`

const Text = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.muted};
  line-height: 1.8;
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 600;
`

function About() {
    return (
        <Section id="about">
            <Container>
                <Title>About Me</Title>

                <Content
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Card
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        <CardText>
                            I am a <Highlight>Fullstack Developer</Highlight> with a strong focus on
                            frontend development using React. I enjoy building clean, responsive,
                            and user-friendly interfaces.
                        </CardText>
                    </Card>

                    <Card
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        <CardText>
                            I have experience developing fullstack applications with Node.js,
                            Express, MongoDB, and JWT authentication. I am comfortable working with
                            REST APIs, managing state, and structuring scalable projects.
                        </CardText>
                    </Card>

                    <Card
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: 'spring', stiffness: 200 }}
                    >
                        <CardText>
                            I enjoy learning new technologies, solving challenges, and continuously improving my skills through real projects.
                        </CardText>
                    </Card>
                </Content>

            </Container>
        </Section>
    )
}

export default About
