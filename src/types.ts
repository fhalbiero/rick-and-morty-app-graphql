export interface Episode {
  id: string;
  name: string;
}

export interface Location {
  id: string;
  name: string;
}

export interface Character {
  id: string;
  name: string;
  image: string;
  species: string;
  type: string;
  status: string;
  gender: string;
  location: Location;
  episode: Episode[];
}

export interface CharactersInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export interface CharactersData {
  characters: {
    info: CharactersInfo;
    results: Character[];
  };
}
