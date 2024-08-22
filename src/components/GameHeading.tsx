import { Heading } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenres();
  const genreName =
    genres?.results.find((g) => g.id === gameQuery.genreId)?.name || "";

  const { data: platforms } = usePlatforms();
  const platformName =
    platforms?.results.find((p) => p.id === gameQuery.platformId)?.name || "";

  const heading = `${platformName} ${genreName} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
