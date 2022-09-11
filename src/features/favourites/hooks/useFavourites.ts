import React from "react";
import { useNavigate } from "react-router-dom";

export type useFavouritesReturn = {
  handleSelection: (personId: string) => void;
};

const useFavourites = (): useFavouritesReturn => {
  const navigate = useNavigate();

  const handleSelection = React.useCallback(
    (personId: string) => {
      navigate(`/wiki/people/${personId}`);
    },
    [navigate]
  );

  return {
    handleSelection,
  };
};

export default useFavourites;
