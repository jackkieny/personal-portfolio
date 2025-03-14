import { useState, useEffect } from 'react'
import { Flex, Group } from '@mantine/core'
import classes from './styles/Left.module.css'
import { Legend } from './Legend.tsx'

const taglines = [
  "Design, develop, deploy.",
  "One line at a time.",
  "Code, commit, conquer.",
  "Building the future...",
  "Build, test, ship.",
  "Code that speaks for itself.",
  "Smooth, smart, scalable.",
  "Web, mobile, desktop, enterprise, you name it.",
  "Pixels to pipelines.",
  "Solutions, not just software.",
  "Efficient, elegant, effective.",
  "From concept to production.",
]

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function Header() {
  const [currentTagline, setCurrentTagline] = useState(taglines[0])
  const [isHovering, setIsHovering] = useState(false)

  useEffect(() => {
    if (!isHovering) return

    let index = taglines.indexOf(currentTagline)
    let nextIndex = (index + 1) % taglines.length
    let nextTagline = taglines[nextIndex]
    let iteration = 0

    let intervalId = setInterval(() => {
      setCurrentTagline(_ => {
        let newTagline = nextTagline.split('').map((_, idx) => {
          if (idx < iteration) {
            return nextTagline[idx]
          }
          return letters[Math.floor(Math.random() * 26)]
        }).join('')
        iteration += 1 / 3
        return newTagline
      })
    }, 30)

    setTimeout(() => {
      clearInterval(intervalId)
      setCurrentTagline(nextTagline)
      setIsHovering(false)
    }, nextTagline.length * 30)

    return () => clearInterval(intervalId)
  }, [isHovering])

  return (
    <Flex direction='column'>
      <h1 className={classes.title}>Jack Kieny</h1>
      <h3 className={classes.subtitle}>Software Engineer</h3>
      <p 
        onMouseEnter={() => setIsHovering(true)}
        className={classes.tagline}
      >
        {currentTagline}
      </p>
      <Group mt={30}>
        <Legend />
      </Group>
    </Flex>
  )
}