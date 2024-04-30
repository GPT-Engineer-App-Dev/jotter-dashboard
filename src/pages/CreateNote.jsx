import { Box, Button, Input, Text, VStack, useToast } from '@chakra-ui/react';
import { useState } from 'react';
import { client } from 'lib/crud';

const CreateNote = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const toast = useToast();

  const saveNote = async () => {
    const key = `note:${Date.now()}`;
    const note = { title, content, id: key };
    const success = await client.set(key, note);
    if (success) {
      toast({
        title: 'Note created.',
        description: "We've saved your note.",
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Error',
        description: "We couldn't save your note.",
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <VStack spacing={4} align="stretch">
      <Text fontSize="2xl" fontWeight="bold">Create a Note</Text>
      <Input placeholder="Title" size="lg" value={title} onChange={(e) => setTitle(e.target.value)} />
      <Input placeholder="Content" size="lg" variant="filled" value={content} onChange={(e) => setContent(e.target.value)} />
      <Button colorScheme="blue" onClick={saveNote}>Save Note</Button>
    </VStack>
  );
};

export default CreateNote;