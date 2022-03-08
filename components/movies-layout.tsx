import React from 'react';
import { Wrap, WrapItem } from '@chakra-ui/react';

export const MoviesLayout: React.FC = ({ children }) => {
  return (
    <Wrap spacing={{ base: '4', sm: '6', md: '10' }} alignItems="center">
      {React.Children.map(children, (child: any) => {
        return <WrapItem>{React.cloneElement(child)}</WrapItem>;
      })}
    </Wrap>
  );
};
