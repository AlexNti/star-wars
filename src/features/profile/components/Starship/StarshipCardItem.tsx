import React from "react";
import { Link } from "react-router-dom";

import { CardItem } from "src/features/profile/components";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Text,
  Spinner,
  Flex,
} from "@chakra-ui/react";
import { useGetProfileStarships } from "../../services/queries";
import { Alert } from "src/components";

import { Starships } from "src/features/wiki/types";

const StarshipCardItem = ({ starships }: { starships: string[] }) => {
  const ids = starships.map((straship) => {
    const splitedUrl = straship.split("/").filter(Boolean);
    const id = splitedUrl[splitedUrl.length - 1];
    return id;
  });
  const strashipResponse = useGetProfileStarships({ ids });

  if (strashipResponse.some(({ isLoading }) => isLoading))
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );
  if (strashipResponse.some(({ error }) => error)) {
    return (
      <Alert
        title="Error At fetching Starships"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }

  const starshipData = strashipResponse.map(({ data }) => data) as Starships[];

  return (
    <Accordion width="100%" p={0} allowToggle>
      <AccordionItem width="100%" borderBottom={0} borderTop={0}>
        <AccordionButton justifyContent="space-between" width="100%" p={0}>
          <Text color="gray.300" fontSize="sm">
            Starships
          </Text>
          <AccordionIcon />
        </AccordionButton>

        <AccordionPanel pb={4}>
          {starshipData.map((starship) => {
            return (
              <Link key={starship.id} to={`/starships/${starship.id}`}>
                <CardItem value={starship.name}></CardItem>
              </Link>
            );
          })}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default StarshipCardItem;
