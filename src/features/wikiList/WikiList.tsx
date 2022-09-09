import React from "react";

import { useWikiPeople } from "./hooks";
import { Flex, Spinner } from "@chakra-ui/react";

import { Alert } from "src/components";
import { Table } from "./components";
import { Outlet, Link } from "react-router-dom";

import { Tabs, TabList, Tab } from "@chakra-ui/react";

const PesonKeys = ["name"];

// const PeopleTab = ({ people, handleSelectPerson }) => {
//   return (
//     <Table
//       data={people || []}
//       tableKeys={PesonKeys}
//       handleSelection={handleSelectPerson}
//     ></Table>
//   );
// };

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
    <>
      <Tabs>
        <TabList>
          <Tab>
            <Link to="people">People</Link>
          </Tab>
          <Tab>
            <Link to="starships">Starships</Link>
          </Tab>
          <Tab>
            <Link to="planets">Planets</Link>
          </Tab>
        </TabList>
      </Tabs>
      <Flex
        alignItems="center"
        flexDirection="column"
        w="100%"
        p={4}
        color="white"
      >
        <Outlet />
      </Flex>
    </>
  );
};

export default WikiList;
