import { Box, List, ListItem, ListIcon, Text } from '@chakra-ui/react';
import { FaRegStickyNote } from 'react-icons/fa';

const NotesList = () => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">All Notes</Text>
      <List spacing={3}>
        <ListItem>
          <ListIcon as={FaRegStickyNote} color="green.500" />
          Note 1
        </ListItem>
        <ListItem>
          <ListIcon as={FaRegStickyNote} color="green.500" />
          Note 2
        </ListItem>
      </List>
    </Box>
  );
};

export default NotesList;