import { Flex, Group } from "@mantine/core";
import classes from './Left.module.css'
import { SocialLinks } from "./SocialLinks";

export function Left() {
  return (
    <div className={classes.container}>
      <Flex
        direction="column"
        align="flex-start"
        justify="space-between"
        className={classes.flexdiv}
      >
        <Group>
          Top
        </Group>
        <Group>
          <SocialLinks />
        </Group>
      </Flex>
    </div>
  )
}