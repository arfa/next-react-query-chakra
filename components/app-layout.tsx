import { ReactNode } from 'react';
import { Box, Flex, Button, useColorModeValue, Stack, useColorMode, Container } from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

export const AppLayout = ({ children }: { children: ReactNode }) => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box overflow='hidden'>
      <Box bg={useColorModeValue('gray.200', 'gray.900')} px={4}>
        <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
          <Box>Logo</Box>

          <Flex alignItems={'center'}>
            <Stack direction={'row'} spacing={7}>
              <Button onClick={toggleColorMode}>{colorMode === 'light' ? <MoonIcon /> : <SunIcon />}</Button>
            </Stack>
          </Flex>
        </Flex>
      </Box>
      <Box as={Container} maxW='8xl' py={8} bg={useColorModeValue('gray.50', 'gray.700')}>
        {children}
      </Box>
    </Box>
  );
};
