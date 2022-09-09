import { MakeApi } from "src/types";
import { People, APIPaths, Starships, Planets } from "../types";

export type GetWikiParams = {
  page?: number;
};
export type WikiApi = {
  getWikiPeople: ({ page }: GetWikiParams) => Promise<People[]>;
  getWikiStarShips: ({ page }: GetWikiParams) => Promise<Starships[]>;
  getWikiPlanets: ({ page }: GetWikiParams) => Promise<Planets[]>;
};

const makeWikiAPI = ({ httpService }: MakeApi): WikiApi => {
  const getWikiPeople = async ({ page }: GetWikiParams) => {
    const response = await httpService.GET(`${APIPaths.PEOPLE}`, null, {
      "Content-Type": "application/json",
    });
    const data = response.data.results as Omit<People, "id">[];

    const withId = data.map(({ url, ...rest }) => {
      const splitedUrl = url.split("/").filter(Boolean);
      const id = splitedUrl[splitedUrl.length - 1];
      return { ...rest, id };
    });

    return withId as People[];
  };

  const getWikiStarShips = async ({ page }: GetWikiParams) => {
    const response = await httpService.GET(`${APIPaths.STARSHIPS}`, null, {
      "Content-Type": "application/json",
    });
    const data = response.data.results as Omit<Starships, "id">[];

    const withId = data.map(({ url, ...rest }) => {
      const splitedUrl = url.split("/").filter(Boolean);
      const id = splitedUrl[splitedUrl.length - 1];
      return { ...rest, id };
    });

    return withId as Starships[];
  };

  const getWikiPlanets = async ({ page }: GetWikiParams) => {
    const response = await httpService.GET(`${APIPaths.PLANETS}`, null, {
      "Content-Type": "application/json",
    });
    const data = response.data.results as Omit<Planets, "id">[];

    const withId = data.map(({ url, ...rest }) => {
      const splitedUrl = url.split("/").filter(Boolean);
      const id = splitedUrl[splitedUrl.length - 1];
      return { ...rest, id };
    });

    return withId as Planets[];
  };

  return { getWikiPeople, getWikiStarShips, getWikiPlanets };
};

export default makeWikiAPI;
