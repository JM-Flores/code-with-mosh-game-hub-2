import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack p="10px">
      <Image src={logo} alt="" boxSize={"60px"}></Image>
      <Text>Nav Bar</Text>
    </HStack>
  );
};

export default NavBar;
