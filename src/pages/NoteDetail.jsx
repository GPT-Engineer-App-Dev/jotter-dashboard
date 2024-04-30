import { Box, Text } from '@chakra-ui/react';

const NoteDetail = () => {
  return (
    <Box>
      <Text fontSize="2xl" fontWeight="bold">Note Details</Text>
      <Text fontSize="lg">This is the detailed view of a specific note.</Text>
    </Box>
  );
};

export default NoteDetail;