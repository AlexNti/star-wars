import React from "react";

import { Flex, Box } from "@chakra-ui/react";

import { Outlet, Link } from "react-router-dom";

import { Tabs, TabList, Tab } from "@chakra-ui/react";
import { wikiTabs, WikiTabs } from "src/features/wiki/constants";
import { useParams } from "react-router-dom";

const getActiveTab = (tabs: WikiTabs, currentTabId: string): number => {
  if (!currentTabId) return 0;
  console.log();
  const currentActiveTabIndex = !tabs[currentTabId]
    ? 0
    : tabs[currentTabId]?.index;

  return currentActiveTabIndex || 0;
};

const Wiki = () => {
  const tabs = wikiTabs();
  const { itemId = "" } = useParams();

  const keyTabs = Object.keys(tabs);

  const currentTab = getActiveTab(tabs, itemId);

  return (
    <Flex flexDirection="column">
      <Box pl={2}>
        <Tabs index={currentTab}>
          <TabList>
            {keyTabs.map((keyTab) => {
              const { id, to, label, enabled } = tabs[keyTab];
              if (!enabled) return null;
              return (
                <Tab p={0} key={id}>
                  <Box padding={"20px"} to={to} as={Link}>
                    {label}
                  </Box>
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
        height="100%"
      >
        <Outlet />
      </Flex>
    </Flex>
  );
};

export default Wiki;
