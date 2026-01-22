import styled from 'styled-components'
import { motion } from 'framer-motion'

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

const Card = styled(motion.div)`
  padding: 2rem;
  background-color: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 16px;
  box-shadow: 0 10px 25px ${({ theme }) => theme.colors.border};
`

const Title = styled.h3`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    margin-bottom: 1.7rem;
  }
`

/* ===== GRID LAYOUT ===== */
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

/* ===== LEFT : TIMELINE ===== */
const Timeline = styled.div`
  position: relative;
  padding-left: 1.5rem;
  border-left: 2px solid ${({ theme }) => theme.colors.border};
`

const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`

const Dot = styled.span`
  position: absolute;
  left: -31.9px;
  top: 0.2rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.text};
`

const TimelineTitle = styled.h4`
  font-size: .95rem;
  font-weight: 500;
  margin-bottom: 0.3rem;
  text-align: left;
`

const TimelineText = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.muted};
  text-align: left;
`

/* ===== RIGHT : CONTENT ===== */
const Content = styled.div`text-align: left;`

const Role = styled.h4`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
`

const Sub = styled.p`
  font-size: 0.95rem;
  color: ${({ theme }) => theme.colors.muted};
  margin-bottom: 1.5rem;
`

const Paragraph = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.muted};
`

const List = styled.ul`
  margin-left: 1.2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.muted};

  li {
    font-size: 0.9rem;
    margin-bottom: 0.5rem;
  }
`

const Divider = styled.hr`
  border: none;
  border-top: 2px solid ${({ theme }) => theme.colors.border};
  margin: 1.5rem 0;
`

function Experience() {
  return (
    <Section id="experience">
      <Container>
        <Title>Experience</Title>

        <Card>
          <Grid>
            {/* ===== LEFT TIMELINE ===== */}
            <Timeline>
              <TimelineItem>
                <Dot />
                <TimelineTitle>Orientation & Basic Mobile</TimelineTitle>
                <TimelineText>
                  Flutter & fundamental mobile development
                </TimelineText>
              </TimelineItem>

              <TimelineItem>
                <Dot />
                <TimelineTitle>API Integration</TimelineTitle>
                <TimelineText>
                  Consume REST API & state management
                </TimelineText>
              </TimelineItem>

              <TimelineItem>
                <Dot />
                <TimelineTitle>UI/UX Implementation</TimelineTitle>
                <TimelineText>
                  Translate Figma into mobile UI
                </TimelineText>
              </TimelineItem>

              <TimelineItem>
                <Dot />
                <TimelineTitle>Final Project</TimelineTitle>
                <TimelineText>
                  CampGear Mobile App
                </TimelineText>
              </TimelineItem>
            </Timeline>

            {/* ===== RIGHT CONTENT ===== */}
            <Content>
              <Role>
                Mobile App Developer – MBKM Studi Independent at NF Academy (NFA)
              </Role>

              <Sub>
                Participated in the MBKM Independent Study program at NF Academy,
                focusing on mobile application development through structured
                learning, hands-on assignments, and a real-world final project.
              </Sub>

              <List>
                <li>Learned mobile app development fundamentals and best practices</li>
                <li>Implemented UI and application logic based on real use cases</li>
                <li>Collaborated through iterative development and feedback sessions</li>
              </List>

              <Divider />

              <Role>Final Project – CampGear</Role>

              <Paragraph>
                CampGear is a mobile application developed as the final project of
                the MBKM program, designed to help users browse and manage camping
                equipment.
              </Paragraph>
            </Content>
          </Grid>
        </Card>
      </Container>
    </Section>
  )
}

export default Experience
