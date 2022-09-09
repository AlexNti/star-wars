import React from "react";

import { useWikiPeople } from "./hooks";

const WikiList = () => {
  const { people } = useWikiPeople();

  console.log({ people });

  return <div>Hello</div>;
};

export default WikiList;
