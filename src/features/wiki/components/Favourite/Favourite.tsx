import React from "react";
import { IconButton } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

type FavouriteProps = { isFavourited: boolean; handleFavourite: () => void };

const Favourite = ({
  isFavourited,
  handleFavourite,
}: FavouriteProps): JSX.Element => {
  const handleClick = React.useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      handleFavourite();
    },
    [handleFavourite]
  );
  return (
    <IconButton
      size="sm"
      onClick={handleClick}
      color={isFavourited ? "green.500" : "gray.600"}
      aria-label="Search database"
      icon={<StarIcon />}
    />
  );
};

export default React.memo(Favourite);
