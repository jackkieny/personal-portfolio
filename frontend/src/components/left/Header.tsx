import { Flex, Group } from '@mantine/core'
import classes from './styles/Left.module.css'
import { Legend } from './Legend.tsx'

export function Header() {
  return (
    <Flex direction='column'>
        <h1 className={classes.title}>Jack Kieny</h1>
        <h3 className={classes.subtitle}>Software Engineer</h3>
        <p>I build things I think are cool.</p>
      <Group mt={30}>
        <Legend />
      </Group>
    </Flex>
  )
}