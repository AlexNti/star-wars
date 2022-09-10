import React from "react";
import { useParams } from "react-router-dom";
import { wikiTabs } from "src/features/wiki/constants";
const WikiPage = () => {
  let { itemId = "default" } = useParams();
  const { Component } = wikiTabs()[itemId];

  return <Component />;
};

export default WikiPage;
