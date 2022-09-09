import React from "react";

import { Flex, Box } from "@chakra-ui/react";

import { Outlet, Link } from "react-router-dom";

import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { wikiTabs, WikiTabs } from "src/features/wiki/constants";
import { useParams } from "react-router-dom";

const getActiveTab = (tabs: WikiTabs, currentTabId: string): number => {
  const currentActiveTabIndex = tabs[currentTabId].index;

  return currentActiveTabIndex || 0;
};

const Wiki = () => {
  const tabs = wikiTabs();
  let { id = "" } = useParams();

  const keyTabs = Object.keys(tabs);

  return (
    <Flex flexDirection="column">
      <Box pl={2}>
        <Tabs index={getActiveTab(tabs, id)}>
          <TabList>
            {keyTabs.map((keyTab) => {
              const { id, to, label } = tabs[keyTab];
              return (
                <Tab key={id}>
                  <Link to={to}>{label}</Link>
                </Tab>
              );
            })}
          </TabList>
        </Tabs>
      </Box>

      <Flex
        alignItems="center"
        pt={4}
        flexDirection="column"
        w="100%"
        color="white"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Wiki;
