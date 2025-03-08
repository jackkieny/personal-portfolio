import classes from './styles/Right.module.css'
import { Summary } from './Summary.tsx'
import { Experience } from './Experience.tsx'
import { Projects } from './Projects.tsx'
import { TechStack } from './TechStack.tsx'

export function Right() {
  return (
    <div className={classes.container} id='about'>
      <Summary />
      <Experience /> 
      <TechStack /> 
      <Projects />
    </div>
  )
}
