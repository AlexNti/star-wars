import { StarshipCardItem } from "src/features/profile/components";
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
      homeworld: { navigateTo: "planets" },
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
});
