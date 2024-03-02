import React from "react";
import { Box, Flex, VStack, Heading, Text, Button, Image, FormControl, FormLabel, Input, Textarea, Link, useColorModeValue, extendTheme, ChakraProvider, Container } from "@chakra-ui/react";
import { FaEnvelope, FaInstagram, FaVimeoV, FaTwitter, FaArrowRight } from "react-icons/fa";

// Custom theme to match the classic blue color scheme
const theme = extendTheme({
  colors: {
    classicBlue: {
      500: "#0F4C81", // Classic blue color
    },
  },
});

const Index = () => {
  const bg = useColorModeValue("white", "gray.800");

  return (
    <ChakraProvider theme={theme}>
      <Box bg={bg} minH="100vh">
        {/* Navigation */}
        <Flex as="nav" py={6} justifyContent="space-between" alignItems="center" px={8}>
          <Heading as="h1" size="lg" color="classicBlue.500">
            Director's Name
          </Heading>
          <Flex alignItems="center">
            <Link px={3} href="#about" color="classicBlue.500">
              About
            </Link>
            <Link px={3} href="#portfolio" color="classicBlue.500">
              Portfolio
            </Link>
            <Link px={3} href="#blog" color="classicBlue.500">
              Blog
            </Link>
            <Link px={3} href="#contact" color="classicBlue.500">
              Contact
            </Link>
          </Flex>
        </Flex>

        {/* Hero section */}
        <Flex as="header" direction="column" align="center" justify="center" minH="70vh" p={8}>
          <VStack spacing={6}>
            <Heading as="h2" size="2xl" fontWeight="bold" textAlign="center" color="classicBlue.500">
              Crafting Stories. Directing Visions.
            </Heading>
            <Text fontSize="xl" color="gray.600">
              Explore the world through the lens of a visionary director.
            </Text>
            <Button rightIcon={<FaArrowRight />} colorScheme="classicBlue" variant="outline">
              View My Work
            </Button>
          </VStack>
        </Flex>

        {/* About section */}
        <Container id="about" py={16}>
          <Heading as="h3" size="lg" mb={6} color="classicBlue.500">
            About Me
          </Heading>
          <Text color="gray.600" fontSize="lg">
            With a passion for storytelling and a decade of experience in film and TV, I bring unique perspectives and innovative ideas to every project.
          </Text>
          <Image src="https://images.unsplash.com/photo-1486413869840-a99ac0a4c031?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaXJlY3RvciUyMHBvcnRyYWl0fGVufDB8fHx8MTcwOTM3MTc2MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Director Portrait" my={6} borderRadius="md" />
        </Container>

        {/* Portfolio section */}
        <Box as="section" id="portfolio" bg="gray.50" py={16}>
          <Container>
            <Heading as="h3" size="lg" mb={6} color="classicBlue.500">
              Portfolio
            </Heading>
            <Flex direction={{ base: "column", md: "row" }} justify="space-between" wrap="wrap">
              {/* Portfolio items would be generated dynamically here */}
              <Box w="45%" mb={4}>
                <Image src="https://images.unsplash.com/photo-1701189701778-7bb8d81549d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2NlbmV8ZW58MHx8fHwxNzA5MzcxNzYxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Film Scene" borderRadius="md" />
                <Text mt={2} color="gray.600">
                  Latest Project
                </Text>
              </Box>
              <Box w="45%" mb={4}>
                <Image src="https://images.unsplash.com/photo-1632187981988-40f3cbaeef5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmaWxtJTIwc2V0fGVufDB8fHx8MTcwOTM3MTc2MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Film Set" borderRadius="md" />
                <Text mt={2} color="gray.600">
                  Behind The Scenes
                </Text>
              </Box>
            </Flex>
          </Container>
        </Box>

        {/* Blog section */}
        <Container as="section" id="blog" py={16}>
          <Heading as="h3" size="lg" mb={6} color="classicBlue.500">
            Latest Updates
          </Heading>
          <Flex direction={{ base: "column", md: "row" }} justify="space-between" wrap="wrap">
            {/* Blog entries would be generated dynamically here */}
            <Box w={{ base: "100%", md: "45%" }} mb={4}>
              <Image src="https://images.unsplash.com/photo-1650114683838-ecb964879a1f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxiZWhpbmQlMjB0aGUlMjBzY2VuZXN8ZW58MHx8fHwxNzA5MzcxNzYxfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Behind the Scenes" borderRadius="md" />
              <Text mt={2} color="gray.600">
                On Set: A Day in the Life
              </Text>
            </Box>
            <Box w={{ base: "100%", md: "45%" }} mb={4}>
              <Image src="https://images.unsplash.com/photo-1595859703065-2259982784bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxkaXJlY3RvciUyMGludGVydmlld3xlbnwwfHx8fDE3MDkzNzE3NjJ8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Director Interview" borderRadius="md" />
              <Text mt={2} color="gray.600">
                Exclusive Interview
              </Text>
            </Box>
          </Flex>
        </Container>

        {/* Contact section */}
        <Flex as="section" id="contact" bg="gray.50" py={16} direction="column" align="center">
          <Heading as="h3" size="lg" mb={6} color="classicBlue.500">
            Get in Touch
          </Heading>
          <Container centerContent>
            <FormControl maxW="600px" mb={3}>
              <FormLabel>Name</FormLabel>
              <Input placeholder="Your Name" />
            </FormControl>
            <FormControl maxW="600px" mb={3}>
              <FormLabel>Email</FormLabel>
              <Input placeholder="Your Email" type="email" />
            </FormControl>
            <FormControl maxW="600px" mb={3}>
              <FormLabel>Message</FormLabel>
              <Textarea placeholder="Your Message" />
            </FormControl>
            <Button leftIcon={<FaEnvelope />} colorScheme="classicBlue" variant="solid">
              Send Message
            </Button>
          </Container>
        </Flex>

        {/* Footer */}
        <Flex as="footer" bg="classicBlue.500" color="white" py={6} justifyContent="center">
          <Flex direction="column" alignItems="center">
            <Heading as="h4" size="md">
              Director's Name
            </Heading>
            <Text my={2}>© 2023 All rights reserved.</Text>
            <Flex>
              <Link href="https://instagram.com" isExternal mx={1}>
                <FaInstagram />
              </Link>
              <Link href="https://vimeo.com" isExternal mx={1}>
                <FaVimeoV />
              </Link>
              <Link href="https://twitter.com" isExternal mx={1}>
                <FaTwitter />
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
