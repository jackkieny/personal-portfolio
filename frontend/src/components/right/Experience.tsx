import classes from './styles/Experience.module.css';
import { Flex, Text, Pill } from '@mantine/core';
import { experience } from './experience.ts';
import { IconArrowUpRight } from '@tabler/icons-react';

export function Experience() {

  const ExpList = experience.map((exp, idx) => {
    return (
      <Flex key={idx} mb={25} p={10} className={classes.paper}>
        <Flex align='start' gap='md' className={classes.inner}>

          <Flex className={classes.left} w="25%">
            <Text c="dimmed" fz={13}>{exp.start} {`\u2014`} {exp.end}</Text>
          </Flex>

          <Flex className={classes.right} direction='column' w="75%">
            <Text fz={18} fw={700}>{exp.position}</Text>
            <Text fz={16} c="dimmed">{exp.company}</Text>
            <Text fz={14}>{exp.description}</Text>
            <Flex gap={10} m={10}>
              {exp.tools.map((tool, idx) => {
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
      {ExpList}
      <Flex gap={20} justify='flex-start'>
        <Text fz={16} mb={200}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >View Full Résumé
          </a>
          <IconArrowUpRight size={20} />
        </Text>
        <Text fz={16} mb={200}>
          <a
            href="https://www.linkedin.com/in/jackkieny/details/experience/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >View Full Work History
          </a>
          <IconArrowUpRight size={20} />
        </Text>
      </Flex>
    </div>
  )
}
