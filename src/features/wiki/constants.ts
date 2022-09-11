import {
  PeopleTab,
  StarshipTab,
  PlanetsTab,
} from "src/features/wiki/components";

import { FavouritesTab } from "src/features/favourites/components";

export type WikiTabs = {
  [key: string]: {
    to: string;
    label: string;
    id: string;
    index: number;
    Component: () => JSX.Element;
    enabled: boolean;
  };
};

export const wikiTabs = (): WikiTabs => ({
  people: {
    to: "people",
    label: "People",
    id: "people",
    Component: PeopleTab,
    index: 0,
    enabled: true,
  },
  starships: {
    to: "starships",
    label: "Star Ships",
    id: "starships",
    Component: StarshipTab,
    index: 1,
    enabled: true,
  },
  planets: {
    to: "planets",
    label: "Planets",
    id: "Planets",
    Component: PlanetsTab,
    index: 2,
    enabled: true,
  },
  favourites: {
    to: "favourites",
    label: "Favourites",
    id: "Favourites",
    Component: FavouritesTab,
    index: 3,
    enabled: true,
  },
});
