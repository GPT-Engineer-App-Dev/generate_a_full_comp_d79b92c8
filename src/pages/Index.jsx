import React from "react";
import { ChakraProvider, Box, Heading, Text, Button, VStack, HStack, IconButton, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useToast } from "@chakra-ui/react";
import { FaPlay, FaPause, FaRobot } from "react-icons/fa";

// This is a placeholder for a modal that would display more information on AI
const InfoModal = ({ isOpen, onClose }) => (
  <Modal isOpen={isOpen} onClose={onClose}>
    <ModalOverlay />
    <ModalContent>
      <ModalHeader>Latest AI Technology</ModalHeader>
      <ModalCloseButton />
      <ModalBody>
        <Text>Learn about the most recent advancements in artificial intelligence, including machine learning, natural language processing, and more. This is the place to find out how AI is changing the world and what the future may hold.</Text>
      </ModalBody>
      <ModalFooter>
        <Button colorScheme="blue" mr={3} onClick={onClose}>
          Close
        </Button>
      </ModalFooter>
    </ModalContent>
  </Modal>
);

const Index = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();

  // Placeholder function for playing video
  const handlePlayVideo = () => {
    toast({
      title: "Playing video...",
      description: "The video has started playing.",
      status: "info",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <ChakraProvider>
      <Box p={5}>
        <VStack spacing={5}>
          <Heading as="h1" size="2xl">
            AI Revolution
          </Heading>
          <Text fontSize="xl">Explore the latest in AI technology and how it's being used to shape the future.</Text>
          <HStack>
            <IconButton aria-label="Play video" icon={<FaPlay />} onClick={handlePlayVideo} />
            <IconButton
              aria-label="Pause video"
              icon={<FaPause />}
              // Placeholder function for pausing video
              onClick={() =>
                toast({
                  title: "Pausing video...",
                  description: "The video has been paused.",
                  status: "info",
                  duration: 5000,
                  isClosable: true,
                })
              }
            />
          </HStack>
          <Button leftIcon={<FaRobot />} colorScheme="teal" onClick={onOpen}>
            Learn More About AI
          </Button>
          <InfoModal isOpen={isOpen} onClose={onClose} />
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Index;
