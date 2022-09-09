import {
  PeopleTab,
  StarshipTab,
  PlanetsTab,
} from "src/features/wiki/components";

export type WikiTabs = {
  [key: string]: {
    to: string;
    label: string;
    id: string;
    index: number;
    Component: () => JSX.Element;
  };
};

export const wikiTabs = (): WikiTabs => ({
  people: {
    to: "people",
    label: "People",
    id: "people",
    Component: PeopleTab,
    index: 0,
  },
  starships: {
    to: "starships",
    label: "Star Ships",
    id: "starships",
    Component: StarshipTab,
    index: 1,
  },
  planets: {
    to: "planets",
    label: "Planets",
    id: "Planets",
    Component: PlanetsTab,
    index: 2,
  },
});
