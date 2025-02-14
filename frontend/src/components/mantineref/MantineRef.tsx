import classes from "./MantineRef.module.css"
import { IconBrandMantine } from "@tabler/icons-react"

export function MantineRef() {
  return (
    <div className={classes.container} onClick={() => window.open("https://mantine.dev")}>
      <IconBrandMantine className={classes.icon}/>
      <div className={classes.text}>
        <p className={classes.link}>Built with <strong>Mantine</strong></p>
      </div>
    </div>
  )
}