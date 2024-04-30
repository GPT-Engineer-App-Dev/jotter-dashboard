import { Box, Button, Input, Text, VStack } from '@chakra-ui/react';

const CreateNote = () => {
  return (
    <VStack spacing={4} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">Create a Note</Text>
      <Input placeholder="Title" size="lg" />
      <Input placeholder="Content" size="lg" variant="filled" />
      <Button colorScheme="blue">Save Note</Button>
    </VStack>
  );
};

export default CreateNote;