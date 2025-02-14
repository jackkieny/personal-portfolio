import { Group, Tooltip } from "@mantine/core"
import classes from './Left.module.css'
import {
  IconBrandGithub,
  IconBrandLinkedin,
} from '@tabler/icons-react'


export function SocialLinks() {

  const socialLinks: {
    name: string;
    url: string;
    icon: React.ElementType;
    primaryColor: string;
  }[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/jackkieny',
      icon: IconBrandGithub,
      primaryColor: 'mantine-colors-purple-9',
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/in/jackkieny',
      icon: IconBrandLinkedin,
      primaryColor: 'mantine-colors-blue-6',
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
          >
            <link.icon size={40} style={{ color: link.primaryColor }} />
          </a>
        </Tooltip>
      ))}
    </Group>
  )
}