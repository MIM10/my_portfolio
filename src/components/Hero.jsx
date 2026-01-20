import styled from 'styled-components'
import { motion } from 'framer-motion'
import { profileImg } from '../assets'

const Section = styled.section`
  min-height: calc(100vh - 80px);
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  padding: 0 3rem;
  
  @media (max-width: 890px) {
    min-height: calc(100vh - 80px);
    padding: 0;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  width: 100%;

  @media (max-width: 890px) {
    flex-direction: column-reverse;
    text-align: center;
  }
`

const Content = styled(motion.div)`
  flex: 1;
  max-width: 600px;
`

const Heading = styled.h2`
  font-size: 3rem;
  line-height: 1.2;

  @media (max-width: 890px) {
    font-size: 1.7rem;
  }
`

const Highlight = styled.span`
  color: ${({ theme }) => theme.colors.secondary};
`

const Description = styled.p`
  margin-top: 1.5rem;
  font-size: 1.05rem;
  color: ${({ theme }) => theme.colors.muted};
`

const ButtonGroup = styled.div`
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1.25rem;
  
  @media (max-width: 490px) {
    flex-direction: column;
    gap: 1rem;
  }
`

const PrimaryButton = styled.a`
  padding: 0.75rem 1.75rem;
  background-color: ${({ theme }) => theme.colors.secondary};
  color: white;
  font-weight: 500
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
  
  @media (max-width: 490px) {
    padding: 0.65rem 1.5rem;
  }
`

const SecondaryButton = styled.a`
  padding: 0.75rem 1.75rem;
  border: 1px solid ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: 500
  border-radius: 8px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.secondary};
    color: white;
  }
  
  @media (max-width: 490px) {
    padding: 0.65rem 1.5rem;
  }
`
const ImageWrapper = styled(motion.div)`
//   flex: 1;
  display: flex;
  justify-content: center;
`

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid ${({ theme }) => theme.colors.secondary};

  @media (max-width: 890px) {
    width: 180px;
    height: 180px;
  }
`

function Hero() {
    return (
        <Section id="hero">
            <Wrapper>
                <Content
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >

                    <Heading>
                        Hi, I'm <Highlight>Mu'aadz</Highlight> <br />
                        Fullstack Developer
                    </Heading>

                    <Description>
                        I build modern web applications using React, Node.js, and MongoDB.
                        Focused on clean code, scalable architecture, and great user experience.
                    </Description>

                    <ButtonGroup>
                        <PrimaryButton href="#projects">View Projects</PrimaryButton>
                        <SecondaryButton href="#contact">Contact Me</SecondaryButton>
                    </ButtonGroup>
                </Content>

                <ImageWrapper
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <ProfileImage src={profileImg} alt="Mu'aadz Profile" />
                </ImageWrapper>
            </Wrapper>
        </Section>
    )
}

export default Hero
