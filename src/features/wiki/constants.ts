import { PeopleTab } from "src/features/wiki/components/PeopleTab";
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
    Component: PeopleTab,
  },
  planets: {
    to: "planets",
    label: "Planets",
    id: "Planets",
    Component: PeopleTab,
  },
});
