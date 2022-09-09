import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { Alert } from "src/components";
import { Table } from "src/features/wiki/components";

import { useWikiPlanets } from "src/features/wiki/hooks";

const tableKeys = ["name"];

const PlanetsTab = () => {
  const { planets, isLoading, planetsError, handleSelect } = useWikiPlanets();

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  if (planetsError) {
    return (
      <Alert
        title="Error At fetching Coins Market"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }
  return (
    <Table
      data={planets || []}
      tableKeys={tableKeys}
      handleSelection={handleSelect}
    ></Table>
  );
};

export default PlanetsTab;
