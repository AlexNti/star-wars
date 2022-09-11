import React from "react";
import { useParams } from "react-router-dom";
import { wikiTabs } from "src/features/wiki/constants";
import { NotFound404 } from "src/components";

const WikiPage = () => {
  let { itemId = "default" } = useParams();
  const Tabs = wikiTabs()[itemId];

  if (!Tabs) return <NotFound404 />;

  return <Tabs.Component />;
};

export default WikiPage;
