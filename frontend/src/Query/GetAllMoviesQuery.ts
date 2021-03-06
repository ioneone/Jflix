import {gql} from "apollo-boost";

export const GetAllMoviesQuery = gql`
  query {
    movies: getAllMovies {
      _id
      title
      description
      released_year
      image
      maturity_rating {
        _id
        name
      }
      genres {
        _id
        name
      }
    }
  }
`;

export interface GetAllMoviesQueryData {
  movies: Array<MovieData>;
}

export interface MovieData {
  _id: string;
  title: string;
  description: string;
  released_year: number;
  image: string;
  maturity_rating: {
    _id: string;
    name: string;
  };
  genres: Array<{
    _id: string;
    name: string;
  }>;
}
