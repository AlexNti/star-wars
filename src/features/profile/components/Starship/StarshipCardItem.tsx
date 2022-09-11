import React from "react";
import { CardItem } from "src/features/profile/components";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
} from "@chakra-ui/react";

const StarshipCardItem = ({ starships }: { starships: string[] }) => {
  return (
    <Accordion p={0} allowToggle>
      <AccordionItem borderBottom={0} borderTop={0}>
        <AccordionButton p={0}>
          <Text color="gray.300" fontSize="sm">
            Starships
          </Text>
          <AccordionIcon />
          <AccordionPanel pb={4}>
            {starships.map((starship) => {
              return <CardItem key={starship} value={starship} />;
            })}
          </AccordionPanel>
        </AccordionButton>
      </AccordionItem>
    </Accordion>
  );
};

export default StarshipCardItem;
