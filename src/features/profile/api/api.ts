import { MakeApi } from "src/types";

import { APIPaths, Starships, Planets, People } from "src/features/wiki/types";

export type GetProfileParams = {
  id: string;
};
export type ProfileApi = {
  getProfilePerson: ({ id }: GetProfileParams) => Promise<People>;
  getProfileStarship: ({ id }: GetProfileParams) => Promise<Starships>;
  getProfilePlanet: ({ id }: GetProfileParams) => Promise<Planets>;
};

const makeWikiAPI = ({ httpService }: MakeApi): ProfileApi => {
  const getProfilePerson = async ({ id }: GetProfileParams) => {
    const response = await httpService.GET(`${APIPaths.PEOPLE}/${id}`, null, {
      "Content-Type": "application/json",
    });
    const data = response.data as Omit<People, "id">;

    return { ...data, id } as People;
  };

  const getProfileStarship = async ({ id }: GetProfileParams) => {
    const response = await httpService.GET(
      `${APIPaths.STARSHIPS}/${id}`,
      null,
      {
        "Content-Type": "application/json",
      }
    );
    const data = response.data as Omit<Starships, "id">;

    return { ...data, id } as Starships;
  };

  const getProfilePlanet = async ({ id }: GetProfileParams) => {
    const response = await httpService.GET(`${APIPaths.PLANETS}/${id}`, null, {
      "Content-Type": "application/json",
    });
    const data = response.data as Omit<Planets, "id">;

    return { ...data, id } as Planets;
  };

  return { getProfilePerson, getProfileStarship, getProfilePlanet };
};

export default makeWikiAPI;
