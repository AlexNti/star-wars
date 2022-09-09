import {
  PeopleTab,
  StarshipTab,
  PlanetsTab,
} from "src/features/wiki/components";
import { WikiTabs } from "src/features/wiki/types";

export const wikiTabs = (): WikiTabs => ({
  people: {
    to: "people",
    label: "People",
    id: "people",
    Component: PeopleTab,
  },
  starships: {
    to: "starships",
    label: "Star Ships",
    id: "starships",
    Component: StarshipTab,
  },
  planets: {
    to: "planets",
    label: "Planets",
    id: "Planets",
    Component: PlanetsTab,
  },
});
