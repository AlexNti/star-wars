import React from "react";
import { Flex, Spinner } from "@chakra-ui/react";
import { Alert } from "src/components";
import { Table } from "src/features/wiki/components";

import { useWikiStarships } from "src/features/wiki/hooks";

const tableKeys = ["name"];

const StarsipTab = () => {
  const { starships, isLoading, starshipsError, handleSelect } =
    useWikiStarships();

  if (isLoading)
    return (
      <Flex alignItems="center" justifyContent="center">
        <Spinner size="lg"></Spinner>
      </Flex>
    );

  if (starshipsError) {
    return (
      <Alert
        title="Error At fetching Coins Market"
        description="An error occured while fetching alert"
      ></Alert>
    );
  }
  return (
    <Table
      data={starships || []}
      tableKeys={tableKeys}
      handleSelection={handleSelect}
    ></Table>
  );
};

export default StarsipTab;
