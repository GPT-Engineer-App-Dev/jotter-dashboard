import { Box, Link, Flex } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <Flex as="nav" gap="4" p="4" bg="blue.500" color="white">
      <Link as={RouterLink} to="/">Home</Link>
      <Link as={RouterLink} to="/create">Create Note</Link>
      <Link as={RouterLink} to="/notes">View Notes</Link>
    </Flex>
  );
};

export default Navigation;