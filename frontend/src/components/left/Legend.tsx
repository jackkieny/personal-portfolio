import { Flex } from "@mantine/core";
import classes from "./styles/Legend.module.css";

export function Legend() {
  return (
    <Flex direction="column" gap={10}>
      <a href="#about" className={classes.link}>About</a>
      <a href="#experience" className={classes.link}>Experience</a>
      <a href="#projects" className={classes.link}>Projects</a>
    </Flex>
  )
}