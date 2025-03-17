import classes from './styles/Experience.module.css';
import { Flex, Text, Pill } from '@mantine/core';
import { experience } from './data/experience.ts';
import { IconArrowUpRight } from '@tabler/icons-react';
import { useMediaQuery } from '@mantine/hooks';

export function Experience() {
  const isMobile = useMediaQuery('(max-width: 1100px)');

  const ExpList = experience.map((exp, idx) => {
    return (
      <Flex
        key={idx}
        mb={25}
        p={10}
        className={classes.paper}
        onMouseDown={(e) => {
          e.preventDefault();
          window.open(exp.link, '_blank')
        }}
      >
        <Flex align='start' gap='md' className={classes.inner}>

          <Flex className={classes.left}>
            <Text c="dimmed" fz={13}>{exp.start} {`\u2014`} {exp.end}</Text>
          </Flex>

          <Flex className={classes.right} direction='column'>
            <Text fz={18} fw={700}>{exp.position} <IconArrowUpRight size={16} className={classes.icon} /></Text>
            <Text fz={16} c="dimmed">{exp.company}</Text>
            <Text fz={14}>{exp.description}</Text>
            <Flex gap={10} m={10}>
              {exp.tools.map((tool, idx) => {
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
    )
  })

  return (
    <div className={classes.container} id='experience'>
      {ExpList}
      <Flex gap={20} justify='flex-start' mb={50} className={classes.links}>
        <Text fz={16} className={classes.links}>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >View Full Résumé
          </a>
          <IconArrowUpRight size={16} className={classes.icon} />
        </Text>
        <Text fz={16} className={classes.links}>
          <a
            href="https://www.linkedin.com/in/jackkieny/details/experience/"
            target="_blank"
            rel="noopener noreferrer"
            className={classes.link}
          >View Full Work History
          </a>
          <IconArrowUpRight size={16} className={classes.icon} />
        </Text>
      </Flex>
    </div>
  )
}
