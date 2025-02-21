import { Flex, Group } from "@mantine/core";
import classes from './styles/Left.module.css'
import { Header } from "./Header";
import { Legend } from "./Legend";
import { SocialLinks } from "./SocialLinks";

export function Left() {
  return (
    <div className={classes.container}>
      <Flex
        direction="column"
        align="flex-start"
        justify="space-between"
        w="100%"
        className={classes.flexdiv}
      >
        <Group>
          <Header />
        </Group>
        <Group>
          <Legend />
        </Group>
        <Group>
          <SocialLinks />
        </Group>
      </Flex>
    </div>
  )
}