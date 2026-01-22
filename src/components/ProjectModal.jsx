import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { motion, AnimatePresence } from 'framer-motion'
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const Carousel = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  border-radius: 14px;
  overflow: hidden;
  margin-bottom: 1.5rem;
`

const Slide = styled(motion.img)`
  width: 100%;
  height: 100%;
  object-fit: contain;
  position: absolute;
  inset: 0;
  background: ${({ theme }) => theme.colors.card};
`

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0,0,0,0.5);
  border: none;
  color: white;
  font-size: 1.2rem;
  padding: 0.4rem;
  border-radius: 50%;
  cursor: pointer;

  ${({ left }) => left && 'left: 0.75rem;'}
  ${({ right }) => right && 'right: 0.75rem;'}
`

const Dots = styled.div`
  display: flex;
  justify-content: center;
  gap: 0.4rem;
  margin-bottom: 1.2rem;
`

const Dot = styled.button`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  border: none;
  background: ${({ active, theme }) =>
    active ? theme.colors.secondary : theme.colors.border};
  cursor: pointer;
`

const Overlay = styled(motion.div)`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
`

const Modal = styled(motion.div)`
  background: ${({ theme }) => theme.colors.card};
  text-align: left;
  max-width: 700px;
  width: 90%;
  border-radius: 20px;
  padding: 2rem;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`

const Close = styled.button`
  position: absolute;
  top: 1.2rem;
  right: 1.2rem;
  background: ${({ theme }) => theme.colors.background};
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2rem;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.text};
`

const Title = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

const SubTitle = styled.h4`
  font-size: 1rem;
  margin-bottom: 0.01rem;
`

const Badge = styled.span`
  display: inline-block;
  margin-bottom: 1rem;
  padding: 0.3rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem;
  background: ${({ theme }) => theme.colors.secondary};
  color: white;
`

const Text = styled.p`
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.muted};
`

const List = styled.ul`
  // list-style-type: none;
  margin-left: 1.2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.muted};

  li {
    font-size: 0.9rem;
    margin-bottom: 0.4rem;
  }
`

const slideVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 100 : -100,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction > 0 ? -100 : 100,
    opacity: 0,
  }),
}

function ProjectModal({ project, onClose }) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState(0)

  useEffect(() => {
    setIndex(0)
  }, [project])

  if (!project) return null

  return (
    <Overlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <Modal
        initial={{ scale: 0.9, y: 30 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 30 }}
        onClick={(e) => e.stopPropagation()}
      >
        {project.screenshots && project.screenshots.length > 0 && (
          <>
            <Carousel>
              <AnimatePresence initial={false} custom={direction}>
                <Slide
                  key={index}
                  src={project.screenshots[index]}
                  alt="project screenshot"
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                />
              </AnimatePresence>

              {project.screenshots.length > 1 && (
                <>
                  <Arrow left onClick={() => {
                    setDirection(-1)
                    setIndex((prev) => (prev - 1 + project.screenshots.length) % project.screenshots.length)
                  }}>
                    <FiChevronLeft />
                  </Arrow>

                  <Arrow right onClick={() => {
                    setDirection(1)
                    setIndex((prev) => (prev + 1) % project.screenshots.length)
                  }}>
                    <FiChevronRight />
                  </Arrow>
                </>
              )}
            </Carousel>

            <Dots>
              {project.screenshots.map((_, i) => (
                <Dot
                  key={i}
                  active={i === index}
                  onClick={() => setIndex(i)}
                />
              ))}
            </Dots>
          </>
        )}

        <Close onClick={onClose}><FiX /></Close>

        <Title>{project.title}</Title>
        <Badge>{project.status}</Badge>

        <Text>{project.description}</Text>

        <SubTitle>Features</SubTitle>
        <List>
          {project.features.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </List>

        <SubTitle>Tech Stack:</SubTitle>
        <Text>{project.stack}</Text>

        <SubTitle>What I learned:</SubTitle>
        <Text>{project.learning}</Text>
      </Modal>
    </Overlay>
  )
}

export default ProjectModal
