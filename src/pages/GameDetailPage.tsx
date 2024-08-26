import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Button, Heading, Spinner, Text } from "@chakra-ui/react";
import { useState } from "react";
import ExpandableText from "../components/ExpandableText";

const GameDetailPage = () => {
  const { slug } = useParams();

  const { data: game, isLoading, error } = useGame(slug!);

  const [isTruncated, setIsTruncated] = useState(true);
  const maxLength = 200;

  if (isLoading) return <Spinner />;

  if (error || !game) throw error;

  return (
    <>
      <Heading>{game.name}</Heading>
      <ExpandableText>{game.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetailPage;
