import { createTheme, Flex, MantineProvider } from '@mantine/core'
import { Left } from './components/left/Left'
import { Right } from './components/right/Right'
import classes from './app.module.css'
import '@mantine/core/styles.css'

const theme = createTheme({
  colors: {
    primary: [
      "#f2f5f8", "#e4e6e9", "#c5ccd3", "#a3b0be", "#8798ad",
      "#202C39", "#1A1F26", "#14171D", "#0E1014", "#08090B"
    ]
  }
})

function App() {

  return (
    <MantineProvider theme={theme}>
      <div className={classes.container}>
        <div className={classes.content}>
          <div className={classes.left}>
            <Left/>
          </div>
          <div className={classes.right}>
            <Right/>
          </div>
        </div>
      </div>
    </MantineProvider>
  )
}

export default App