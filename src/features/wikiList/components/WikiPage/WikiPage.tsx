import React from "react";
import { useParams } from "react-router-dom";
import { wikiTabs } from "src/features/wikiList/constants";
const WikiPage = () => {
  let { id = "default" } = useParams();
  const { Component } = wikiTabs()[id];

  return <Component />;
};

export default WikiPage;
