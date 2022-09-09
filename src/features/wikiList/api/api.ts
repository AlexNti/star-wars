import { MakeApi } from "src/types";
import { People, APIPaths } from "../types";

export type GetWikiParams = {
  page?: number;
};
export type WikiApi = {
  getWikiPeople: ({ page }: GetWikiParams) => Promise<People[]>;
};

const makeWikiAPI = ({ httpService }: MakeApi): WikiApi => {
  const getWikiPeople = async ({ page }: GetWikiParams) => {
    const response = await httpService.GET(`${APIPaths.PEOPLE}`, null, {
      "Content-Type": "application/json",
    });
    const data = response.data.results as Omit<People, "id">[];

    const peopleWithId = data.map(({ url, ...rest }) => {
      const splitedUrl = url.split("/").filter(Boolean);
      const id = splitedUrl[splitedUrl.length - 1];
      return { ...rest, id };
    });

    return peopleWithId as People[];
  };

  return { getWikiPeople };
};

export default makeWikiAPI;
