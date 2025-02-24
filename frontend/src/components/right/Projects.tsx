import classes from './styles/Projects.module.css';
import { Flex, Text, Pill, Image } from '@mantine/core';
import { projects } from './projects.ts';
import { IconArrowUpRight } from '@tabler/icons-react';

export function Projects() {

  const ProjectsList = projects.map((proj, idx) => {
    return (
      <Flex
        id='projects'
        key={idx}
        mb={25}
        p={10}
        className={classes.paper}
        onMouseDown={(e) => {
          e.preventDefault();
          window.open(proj.link, '_blank')
        }}
      >
        <Flex align='start' gap='md' className={classes.inner}>

          <Flex className={classes.left} w="30%" direction='column' gap={10} align='center'>
            <Image
              src={proj.image}
              alt={proj.name}
              w={150}
              h={100}
              radius="md"
            />
            <Text c="dimmed" fz={13}>{proj.year}</Text>
          </Flex>

          <Flex className={classes.right} direction='column' w="75%">
            <Text fz={18} fw={700}>{proj.name} <IconArrowUpRight size={16} className={classes.icon} /></Text>
            <Text fz={14}>{proj.description}</Text>
            <Flex gap={10} m={10}>
              {proj.tools.map((tool, idx) => {
                return (
                  <Pill
                    key={idx}
                    fz={15}
                    c={'#A3B0BE'}
                    bg={'#202C39'}
                    className={classes.pill}
                  >{tool}</Pill>
                )
              })}
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    )
  })

  return (
    <div className={classes.container}>
      {ProjectsList}
    </div>
  )
}
