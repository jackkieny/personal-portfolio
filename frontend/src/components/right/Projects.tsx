import classes from './styles/Projects.module.css';
import { Flex, Text, Pill, Image, Tooltip } from '@mantine/core';
import { projects } from './data/projects.ts';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export function Projects() {
  const isMobile = useMediaQuery('(max-width: 1100px)');

  const ProjectsList = projects.map((proj, idx) => {
    return (
      <Tooltip label="No link available for this project" position='bottom' disabled={proj.link !== ''}>
        <Flex
          id='projects'
          key={idx}
          mb={50}
          p={10}
          className={classes.paper}
          style={{ cursor: proj.link !== '' ? 'pointer' : 'default' }}
          onMouseDown={(e) => {
            e.preventDefault();
            if (proj.link !== '') {
              window.open(proj.link, '_blank');
            }
          }}
        >
          <Flex align='start' gap='md' className={classes.inner}>
            <Flex className={classes.left} direction='column' gap={10} align='center'>
              <Image
                src={proj.image}
                alt={proj.name}
                mih={100}
                maw={150}
                radius="md"
                bg={'white'}
              />
              <Text c="dimmed" fz={13}>{proj.year}</Text>
            </Flex>

            <Flex className={classes.right} direction='column'>
              <Text fz={18} fw={700}>{proj.name} {proj.link != '' ? <IconArrowUpRight size={16} className={classes.icon} /> : <></>}</Text>
              <Text fz={14}>{proj.description}</Text>
              <Flex gap={10} m={10}>
                {proj.tools.map((tool, idx) => {
                  return (
                    <Pill
                      key={idx}
                      fz={isMobile ? 12 : 15}
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
      </Tooltip>
    )
  })

  return (
    <div className={classes.container}>
      {ProjectsList}
    </div>
  )
}
