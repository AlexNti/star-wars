export enum APIPaths {
  PEOPLE = "people",
  PLANETS = "planets",
  STARSHIPS = "starships",
}

export enum QUERY_KEYS {
  PEOPLE = "PEOPLE",
  PLANETS = "PLANETS",
  STARSHIPS = "STARSHIPS",
}

export type Starships = {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  id: string;
  url: string;
};

export type Planets = {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  id: string;
  url: string;
};

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
