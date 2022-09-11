import React from "react";
import { Link } from "react-router-dom";

import { CardItem } from "src/features/profile/components";

import { Spinner, Flex, Box } from "@chakra-ui/react";
import { useGetProfilePlanet } from "../../services/queries";
import { Alert } from "src/components";

const PlanetCardItem = ({ homeworld }: { homeworld: string }) => {
  const splitedUrl = homeworld.split("/").filter(Boolean);
  const id = splitedUrl[splitedUrl.length - 1];
  const { isLoading, error, data } = useGetProfilePlanet({ id });

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );
  if (error) {
    return (
      <Alert
        title="Error At fetching Starships"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }

  return (
    <Box as={Link} width="100%" key={data?.id} to={`/wiki/planets/${data?.id}`}>
      <CardItem underLine title="homeworld" value={data?.name}></CardItem>
    </Box>
  );
};

export default PlanetCardItem;
