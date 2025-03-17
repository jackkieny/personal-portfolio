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
  "Pixels to pipelines.",
  "Solutions, not just software.",
  "Efficient, elegant, effective.",
  "From concept to production.",
]

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

export function Header() {
  const [currentTagline, setCurrentTagline] = useState(taglines[0])

  useEffect(() => {
    let index = 0
    let iteration = 0
    let nextTagline = taglines[index]

    const intervalId = setInterval(() => {
      iteration = 0
      index = (index + 1) % taglines.length
      nextTagline = taglines[index]

      const animationInterval = setInterval(() => {
        setCurrentTagline(_ => {
          let newTagline = nextTagline.split('').map((_, idx) => {
            if (idx < iteration) {
              return nextTagline[idx]
            }
            return letters[Math.floor(Math.random() * 26)]
          }).join('')
          iteration += 1 / 7
          return newTagline
        })
      }, 30)

      setTimeout(() => {
        clearInterval(animationInterval)
        setCurrentTagline(nextTagline)
      }, nextTagline.length * 30 * 7)
    }, 5000)

    return () => clearInterval(intervalId)
  }, [])

  return (
    <Flex direction='column'>
      <h1 className={classes.title}>Jack Kieny</h1>
      <h3 className={classes.subtitle}>Software Engineer</h3>
      <p className={classes.tagline}>
        {currentTagline}
      </p>
      <Group mt={30}>
        <Legend />
      </Group>
    </Flex>
  )
}