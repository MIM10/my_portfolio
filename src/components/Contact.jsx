import styled from 'styled-components'
import { FiMail, FiGithub, FiLinkedin } from 'react-icons/fi'

const Section = styled.section`
  padding: 7rem 3rem 8rem;
  text-align: center;

    @media (max-width: 768px) {
        padding: 7rem 1.5rem 8rem;
    }
`

const Container = styled.div`
  max-width: 700px;
  margin: 0 auto;
`

const Title = styled.h3`
  font-size: 2.2rem;
  font-weight: 700;
  margin-bottom: 1.2rem;
`

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 2.5rem;
`

const Actions = styled.div`
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  flex-wrap: wrap;
`

const PrimaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 500;
  text-decoration: none;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    opacity: 0.9;
  }
`

const SecondaryButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 999px;
  font-size: 0.9rem;
  text-decoration: none;
  border: 1px solid ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.colors.card};
    transform: translateY(-2px);
  }
`

function Contact() {
  return (
    <Section id="contact">
      <Container>
        <Title>Let’s Work Together</Title>

        <Text>
          I’m open to internship opportunities, freelance projects, and
          collaborative work. If you’re looking for a developer who enjoys
          learning, solving problems, and building meaningful products,
          feel free to reach out.
        </Text>

        <Actions>
          <PrimaryButton href="mailto:abdqdmim@gmail.com">
            <FiMail /> Contact Me
          </PrimaryButton>

          <SecondaryButton
            href="https://github.com/mim10"
            target="_blank"
          >
            <FiGithub /> GitHub
          </SecondaryButton>

          <SecondaryButton
            href="https://linkedin.com/in/mucaa"
            target="_blank"
          >
            <FiLinkedin /> LinkedIn
          </SecondaryButton>
        </Actions>
      </Container>
    </Section>
  )
}

export default Contact
