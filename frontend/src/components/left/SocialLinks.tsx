import { Group, Tooltip } from "@mantine/core"
import classes from './Left.module.css'
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react'


export function SocialLinks() {

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/jackkieny',
      icon: IconBrandGithub,
      primaryColor: '#8931b2',
      secondaryColor: '#e7d6fb'
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jackkieny',
      icon: IconBrandLinkedin,
      primaryColor: '#1d72fe',
      secondaryColor: '#cde2ff'
    },
  ]

  return (
    <Group gap={1}>
      {socialLinks.map((link, index) => (
        <Tooltip key={index} label={link.name} position='top' withArrow>
          <a
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
            className={classes.sociallink}
            style={{ '--hover-color': link.secondaryColor } as React.CSSProperties}
          >
            <link.icon size={40} color={link.primaryColor} />
          </a>
        </Tooltip>
      ))}
    </Group>
  )
}