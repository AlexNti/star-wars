import React from "react";

import { FavouritesContext } from "src/providers";

const useFavouriteContext = () => React.useContext(FavouritesContext);

export default useFavouriteContext;
