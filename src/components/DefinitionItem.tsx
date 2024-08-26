import { Box, Heading } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode | ReactNode[];
}

const DefinitionItem = ({ term: title, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as={"dt"} color={"gray.600"} size={"md"}>
        {title}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
