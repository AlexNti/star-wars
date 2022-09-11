import {
  StarshipCardItem,
  PlanetCardItem,
} from "src/features/profile/components";
export const makeProfileMapper = (): Record<
  string,
  {
    bio: Record<
      string,
      {
        navigateTo: string;
        title?: string;
        Component?: (args: any) => JSX.Element;
      }
    >;
  }
> => ({
  people: {
    bio: {
      birth_year: { navigateTo: "", title: "birth year" },
      starships: { navigateTo: "starships", Component: StarshipCardItem },
      skin_color: { navigateTo: "", title: "skin color" },
      name: { navigateTo: "" },
      homeworld: { navigateTo: "planets", Component: PlanetCardItem },
      height: { navigateTo: "" },
      hair_color: { navigateTo: "", title: "hair color" },
      gender: { navigateTo: "" },
    },
  },
  starships: {
    bio: {
      name: { navigateTo: "" },
      model: { navigateTo: "" },
      manufacturer: { navigateTo: "" },
      cost_in_credits: { navigateTo: "", title: "cost" },
      max_atmosphering_speed: { navigateTo: "", title: "max speed" },
      passengers: { navigateTo: "" },
      consumables: { navigateTo: "", title: "hair color" },
      cargo_capacity: { navigateTo: "", title: "Cargo capacity" },
    },
  },
  planets: {
    bio: {
      name: { navigateTo: "" },
      rotation_period: { navigateTo: "", title: "rotation period" },
      orbital_period: { navigateTo: "", title: "orbital period" },
      diameter: { navigateTo: "" },
      climate: { navigateTo: "" },
      gravity: { navigateTo: "" },
      terrain: { navigateTo: "" },
      population: { navigateTo: "" },
      surface_water: { navigateTo: "", title: "surface water" },
    },
  },
});
