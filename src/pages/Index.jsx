import { Container, Text, VStack, HStack, Box, Divider, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center">
          KittyBox.top
        </Text>

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Paslaugos
          </Text>
          <VStack align="start" spacing={2} mt={2}>
            <HStack justify="space-between" width="100%">
              <Text>VIP</Text>
              <Text>1€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>VIP+</Text>
              <Text>2€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>MVP</Text>
              <Text>3€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>MVP+</Text>
              <Text>4€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>MVP++</Text>
              <Text>5€</Text>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Text fontSize="2xl" fontWeight="bold">
            Kitos Paslaugos
          </Text>
          <VStack align="start" spacing={2} mt={2}>
            <HStack justify="space-between" width="100%">
              <Text>Unban</Text>
              <Text>1€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>Unmute</Text>
              <Text>0.50€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text>/raktas</Text>
              <Text>2€</Text>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Text fontSize="lg">Savininkas: Lenvx</Text>
          <Text fontSize="lg">Website Kūrėjas: sorybas</Text>
          <Text fontSize="lg">
            Serverio Discord:{" "}
            <Link href="https://discord.gg/hb9VXJSC" color="teal.500" isExternal>
              https://discord.gg/hb9VXJSC
            </Link>
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;
