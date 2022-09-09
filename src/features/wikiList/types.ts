export enum APIPaths {
  PEOPLE = "people",
}

export enum QUERY_KEYS {
  PEOPLE = "PEOPLE",
}

export type People = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  gender: "male" | "female" | "unknown";
  homeworld: string;
  url: string;
  id: string;
};
