import useTrailers from "../hooks/useTrailers";

const GameTrailer = ({ gameId }: { gameId: number }) => {
  const { data, error, isLoading } = useTrailers(gameId);

  if (isLoading) return null;
  if (error) throw error;

  const first = data?.results[0];

  return first ? (
    <video src={first?.data[480]} poster={first?.preview} controls />
  ) : null;
};

export default GameTrailer;
