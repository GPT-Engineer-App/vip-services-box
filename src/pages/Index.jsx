import { Container, Text, VStack, HStack, Box, Divider, Link } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" py={8}>
      <VStack spacing={6} align="stretch">
        <Text fontSize="4xl" fontWeight="bold" textAlign="center" color="primary.600">
          KittyBox.top
        </Text>

        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="secondary.700">
            Paslaugos
          </Text>
          <VStack align="start" spacing={2} mt={2}>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">VIP</Text>
              <Text color="primary.500">1€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">VIP+</Text>
              <Text color="primary.500">2€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">MVP</Text>
              <Text color="primary.500">3€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">MVP+</Text>
              <Text color="primary.500">4€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">MVP++</Text>
              <Text color="primary.500">5€</Text>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Text fontSize="2xl" fontWeight="bold" color="secondary.700">
            Kitos Paslaugos
          </Text>
          <VStack align="start" spacing={2} mt={2}>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">Unban</Text>
              <Text color="primary.500">1€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">Unmute</Text>
              <Text color="primary.500">0.50€</Text>
            </HStack>
            <HStack justify="space-between" width="100%">
              <Text color="primary.500">/raktas</Text>
              <Text color="primary.500">2€</Text>
            </HStack>
          </VStack>
        </Box>

        <Divider />

        <Box>
          <Text fontSize="lg" color="secondary.600">
            Savininkas: Lenvx
          </Text>
          <Text fontSize="lg" color="secondary.600">
            Website Kūrėjas: sorybas
          </Text>
          <Text fontSize="lg" color="secondary.600">
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
