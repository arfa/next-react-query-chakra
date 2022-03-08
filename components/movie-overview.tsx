import { Badge, Flex, Heading, Image, Stack, StackProps, Text, useColorModeValue } from '@chakra-ui/react';
import { useTextTruncate } from './hooks/use-text-truncate';

import React from 'react';

interface MovieOverviewProps extends StackProps {
  categories: string[];
  description?: string;
  picture: string;
  title: string;
  titleNoOfLines?: number;
}

const WIDTH_DEFAULT = { sm: '100%', md: '420px', lg: 'auto' };
const HEIGHT_DEFAULT = { md: 'auto' };

export const MovieOverview = ({
  categories,
  description,
  picture,
  title,
  titleNoOfLines = 1,
  width = WIDTH_DEFAULT,
  height = HEIGHT_DEFAULT,
  ...props
}: MovieOverviewProps) => {
  const { text } = useTextTruncate(description);
  const bgColor = useColorModeValue('blue.50', 'blue.800');
  return (
    <Stack
      borderWidth='1px'
      borderRadius='lg'
      width={width}
      height={height}
      direction={{ base: 'column', md: 'row' }}
      bg={useColorModeValue('white', 'gray.900')}
      boxShadow={'2xl'}
      padding={2}
      {...props}
    >
      <Flex flex={1} bg='blue.200' minW='190px' maxW='350px'>
        <Image objectFit='cover' boxSize='100%' src={picture} alt={`${title}`} />
      </Flex>
      <Stack flex={1} flexDirection='column' justifyContent='center' alignItems='center' p={1} pt={2}>
        <Heading fontSize={'2xl'} fontFamily={'body'} noOfLines={titleNoOfLines} >
          {title}
        </Heading>
        <Stack align={'center'} justify={'center'} direction={'row'} wrap='wrap'  mt={6}>
          {categories.map((category, index) => {
            return (
            <Badge key={`${category}-${index}`} px={2} py={1} bg={bgColor} fontWeight={'400'} m={1}>
              {category}
            </Badge>
          )})}
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
