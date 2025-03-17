import { Flex, Image, SimpleGrid, Text, Tooltip } from "@mantine/core";
import classes from './styles/TechStack.module.css';
import { frontend, backend, database } from './data/techstack.ts';
import { useMediaQuery } from "@mantine/hooks";

interface TechItem {
  name: string;
  title?: string | undefined;
  url: string;
}

const renderTechItems = (items: TechItem[]) => {
  const isMobile = useMediaQuery('(max-width: 1100px)');
  return (
    <>
      <Text fz={20} fw={300}>{items[0].title}</Text>
      <Flex className={classes.card} justify='center' align='center' mih={100} mb={50}>
        <SimpleGrid cols={isMobile ? 2 : 4} w='100%'>
          {items.map((item, index) => {
            return (
              <Tooltip key={index} label={item.name} position='bottom' openDelay={300} offset={-10} withArrow arrowSize={10}>
                <Flex key={index} direction='column' align='center' gap='sm' py={20}>
                  <Image src={item.url} alt={item.name} w={75} />
                </Flex>
              </Tooltip>
            );
          })}
        </SimpleGrid>
      </Flex>
    </>
  );
};

export function TechStack() {
  return (
    <Flex id='techstack' direction='column' gap='md' w='100%' pt='6rem'>
      {renderTechItems(frontend)}
      {renderTechItems(backend)}
      {renderTechItems(database)}
    </Flex>
  );
}