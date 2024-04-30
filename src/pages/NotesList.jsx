import { Box, List, ListItem, ListIcon, Text, useToast } from '@chakra-ui/react';
import { FaRegStickyNote } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { client } from 'lib/crud';

const NotesList = () => {
  const [notes, setNotes] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchNotes = async () => {
      const data = await client.getWithPrefix('note:');
      if (data) {
        setNotes(data.map(item => ({ ...item.value, id: item.key })));
      } else {
        toast({
          title: 'Error',
          description: "Could not fetch notes.",
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      }
    };
    fetchNotes();
  }, []);

  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">All Notes</Text>
      <List spacing={3}>
        {notes.map(note => (
          <ListItem key={note.id}>
            <ListIcon as={FaRegStickyNote} color="green.500" />
            {note.title}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default NotesList;