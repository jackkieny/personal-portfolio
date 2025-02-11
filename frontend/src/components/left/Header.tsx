import {
  Flex,
  Title,
  Text,
} from '@mantine/core'

export function Header() {
  return (
    <Flex direction='column'>
      <Title order={1} lh={2}>Jack Kieny</Title>
      <Text size="lg" lh={1.5}>Software Engineer</Text>
      <Text size='sm' lh={1.5}>
        I build things I think are cool
      </Text>
    </Flex>
  )
}