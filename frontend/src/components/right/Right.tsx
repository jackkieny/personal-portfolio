import classes from './styles/Right.module.css'
import { Summary } from './Summary'
import { Experience } from './Experience'
// import { Projects } from './Projects'

export function Right() {
  return (
    <div className={classes.container}>
      <Summary />
      <Experience /> 
      {/* <Projects /> */}
    </div>
  )
}
