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
    const data = response.data as People[];

    return data;
  };

  return { getWikiPeople };
};

export default makeWikiAPI;
