import React from "react";

import { useWikiPeople } from "./hooks";
import { Flex, Spinner } from "@chakra-ui/react";

import { Alert } from "src/components";
import { Table } from "./components";

const WikiList = () => {
  const { people, isLoading, peopleError, handleSelectPerson } =
    useWikiPeople();

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  if (peopleError) {
    return (
      <Alert
        title="Error At fetching Coins Market"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }

  return (
    <Flex
      alignItems="center"
      flexDirection="column"
      w="100%"
      p={4}
      color="white"
    >
      <Table
        people={people || []}
        handleSelectPerson={handleSelectPerson}
      ></Table>
    </Flex>
  );
};

export default WikiList;
