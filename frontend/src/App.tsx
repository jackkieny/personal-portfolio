import { Flex, Group, MantineProvider } from '@mantine/core'
import { Left } from './components/left/Left'
import { Right } from './components/right/Right'
import classes from './app.module.css'
import '@mantine/core/styles.css'

function App() {

  return (
    <MantineProvider>
      <div className={classes.container}>
        <Group
          justify='center'
          align='flex-start'
          w="80%"
          className={classes.content}>
          {/* Left - Header */}
          <Flex align='center' w="40%" h="50%" direction='column' >
            <Left />
          </Flex>

          {/* Right - Main */}
          <Group justify='flex-start' w="50%">
            <Right />
          </Group>
        </Group>
      </div>
    </MantineProvider>
  )
}

export default App