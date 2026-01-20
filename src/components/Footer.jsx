import styled from 'styled-components'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const FooterWrapper = styled.footer`
  margin-top: 5rem;
  padding: 3rem 2rem 2.5rem;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`

const Brand = styled.div`
  font-weight: 600;
  font-size: 1rem;
`

const Copyright = styled.p`
  font-size: 0.85rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-top: 0.3rem;
`

const Socials = styled.div`
  display: flex;
  gap: 1.2rem;
`

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 1.1rem;
  transition: all 0.25s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`

function Footer() {
  return (
    <FooterWrapper>
      <Container>
        <div>
          <Brand>Mu’aadz</Brand>
          <Copyright>
            © {new Date().getFullYear()} All rights reserved
          </Copyright>
        </div>

        <Socials>
          <SocialLink
            href="mailto:your-email@example.com"
            aria-label="Email"
          >
            <FiMail />
          </SocialLink>

          <SocialLink
            href="https://github.com/yourusername"
            target="_blank"
            aria-label="GitHub"
          >
            <FiGithub />
          </SocialLink>

          <SocialLink
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            aria-label="LinkedIn"
          >
            <FiLinkedin />
          </SocialLink>
        </Socials>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
