import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { Alert } from "src/components";
import { Table } from "src/features/wikiList/components";

import { useWikiPeople } from "src/features/wikiList/hooks";

const PeopleKeys = ["name"];

const PeopleTab = () => {
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
    <Table
      data={people || []}
      tableKeys={PeopleKeys}
      handleSelection={handleSelectPerson}
    ></Table>
  );
};

export default PeopleTab;
