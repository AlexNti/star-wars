import React from "react";
import { useParams } from "react-router-dom";

const WikiPage = () => {
  let { id } = useParams();

  return <div>Here is wiki page for {id}</div>;
};

export default WikiPage;
