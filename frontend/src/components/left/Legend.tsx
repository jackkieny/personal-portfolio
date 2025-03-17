import { Flex } from "@mantine/core";
import classes from "./styles/Legend.module.css";

export function Legend() {
  return (
    <div className={classes.legend}>
      <Flex direction="column" gap={10}>
        <a href="#about" className={classes.link}>About</a>
        <a href="#experience" className={classes.link}>Experience</a>
        <a href="#techstack" className={classes.link}>Tech Stack</a>
        <a href="#projects" className={classes.link}>Projects</a>
      </Flex>
    </div>
  )
}