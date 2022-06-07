import { Flex, Box, Avatar, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Filipe Carvalho</Text>
          <Text color="gray.300" fontSize="small">
            si.carvalhofilipe@gmail.com
          </Text>
        </Box>
      )}
      <Avatar
        size="md"
        name="Filipe T. De Carvalho"
        src="https://github.com/CarvalhoFilipe.png"
      />
    </Flex>
  );
}
