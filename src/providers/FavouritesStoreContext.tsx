import React from "react";

export type State = {
  favourites: Record<string, string>;
};

type Action<T, P = never> = {
  type: T;
  payload: P;
};

type addFavouriteCharacter = Action<"ADD_FAVOURITE_CHARACTER", { id: string }>;

type removeFavouriteCharacter = Action<
  "REMOVE_FAVOURITE_CHARACTER",
  { id: string }
>;

type Actions = addFavouriteCharacter | removeFavouriteCharacter;

function reducer(state: State, action: Actions) {
  switch (action.type) {
    case "ADD_FAVOURITE_CHARACTER":
      return {
        ...state,
        favourites: {
          ...state.favourites,
          [action.payload.id]: action.payload.id,
        },
      };
    case "REMOVE_FAVOURITE_CHARACTER":
      const { [action.payload.id]: keyToRemove, ...restFavourites } =
        state.favourites;
      return { ...state, favourites: { ...restFavourites } };
    default:
      throw new Error();
  }
}

export const FavouritesContext = React.createContext<{
  state: State;
  dispatch: React.Dispatch<any>;
}>({
  state: { favourites: {} },
  dispatch: (action: Actions) => null,
});

export const FavouritesContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Actions>>(
    reducer,
    { favourites: {} }
  );
  const contextValue = React.useMemo(
    () => ({ state, dispatch }),
    [state, dispatch]
  );

  return (
    <FavouritesContext.Provider value={contextValue}>
      {children}
    </FavouritesContext.Provider>
  );
};
