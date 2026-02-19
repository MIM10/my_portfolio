import styled from "styled-components";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope, FaInstagram } from "react-icons/fa";

const Wrapper = styled.footer`
  background-color: ${({ theme }) => theme.colors.card};
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.border};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 16px;
  padding: 60px 8%;
  border: 1px solid ${({ theme }) => theme.colors.border};
  font-family: ${({ theme }) => theme.fonts.main};

  @media (max-width: 768px) {
    padding: 40px 4%;
    margin: 0 -2rem -2rem;
  }
`;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 40px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.h3`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 14px;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.muted};
`;

const Title = styled.h4`
  margin-bottom: 16px;
  color: ${({ theme }) => theme.colors.primary};
`;

const NavLink = styled.a`
  margin-bottom: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.muted};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.muted};
  font-size: 14px;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;

const SocialRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const SocialIcon = styled.a`
  font-size: 20px;
  color: ${({ theme }) => theme.colors.muted};
  transition: 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
    transform: translateY(-2px);
  }
`;

const Bottom = styled.div`
  margin-top: 50px;
  padding-top: 20px;
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  text-align: center;
  font-size: 13px;
  color: ${({ theme }) => theme.colors.muted};
`;

export default function Footer() {
  return (
    <Wrapper>
      <Container>

        <Column>
          <Logo>Mu'aadz</Logo>
          <Description>
            Junior Full-Stack Developer focused on building scalable web
            and mobile applications using Laravel, React, and Flutter.
          </Description>
        </Column>

        <Column>
          <Title>Navigation</Title>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#experience">Experience</NavLink>  
          <NavLink href="#contact">Contact</NavLink>
        </Column>

        <Column>
          <Title>Connect</Title>
          <SocialRow>
            <SocialIcon href="https://github.com/mim10" target="_blank">
              <FaGithub />
            </SocialIcon>
            <SocialIcon href="https://linkedin.com/in/muaadz" target="_blank">
              <FaLinkedin />
            </SocialIcon>
            <SocialIcon href="https://wa.me/6285772396815" target="_blank">
              <FaWhatsapp />
            </SocialIcon>
            <SocialIcon href="https://www.instagram.com/aqmadzna" target="_blank">
              <FaInstagram />
            </SocialIcon>
            <SocialIcon href="mailto:abdqdmim@gmail.com" target="_blank">
              <FaEnvelope />
            </SocialIcon>
          </SocialRow>
        </Column>

      </Container>

      <Bottom>
        © {new Date().getFullYear()} Mu'aadz. All rights reserved.
      </Bottom>
    </Wrapper>
  );
}
