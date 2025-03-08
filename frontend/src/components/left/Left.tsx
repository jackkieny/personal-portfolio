import { Flex, Group } from "@mantine/core";
import classes from './styles/Left.module.css'
import { Header } from './Header.tsx';
import { SocialLinks } from './SocialLinks.tsx';

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
          <SocialLinks />
        </Group>
      </Flex>
    </div>
  )
}