import React from "react";

import { FavouritesContext } from "src/features/favourites/services";

const useFavouriteContext = () => React.useContext(FavouritesContext);

export default useFavouriteContext;
