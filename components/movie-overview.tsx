import { Badge, Flex, Heading, Image, Stack, StackProps, Text, useColorModeValue } from '@chakra-ui/react';
import { useTextTruncate } from './hooks/use-text-truncate';

import React from 'react';

interface MovieOverviewProps extends StackProps {
  categories: string[];
  description?: string;
  picture: string;
  title: string;
}

const WIDTH_DEFAULT = { sm: '100%', md: '420px' };

export const MovieOverview = ({
  categories,
  description,
  picture,
  title,
  width = WIDTH_DEFAULT,
}: MovieOverviewProps) => {
  const { text } = useTextTruncate(description);
  const bgColor = useColorModeValue('blue.50', 'blue.800');
  return (
    <Stack
      borderWidth='1px'
      borderRadius='lg'
      width={width}
      height={{ md: '20rem' }}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={2}
    >
      <Flex flex={1} bg='blue.200'>
        <Image objectFit='cover' boxSize='100%' src={picture} alt={`${title}`} />
      </Flex>
      <Stack flex={1} flexDirection='column' justifyContent='center' alignItems='center' p={1} pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          {title}
        </Heading>
        <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
          {categories.map((category) => (
            <Badge key={category} px={2} py={1} bg={bgColor} fontWeight={'400'}>
              {category}
            </Badge>
          ))}
        </Stack>
        {description && (
          <Text color={'gray.500'} size='sm' mb={4}>
            {text}
          </Text>
        )}
      </Stack>
    </Stack>
  );
};
