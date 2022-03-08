import React from 'react';
import { Wrap, WrapItem, WrapProps } from '@chakra-ui/react';

export const MoviesLayout: React.FC<WrapProps> = ({ children, align = 'center', justify = 'center' }) => {
  return (
    <Wrap spacing={{ base: '10', md: '14' }} align={align} justify={justify}>
      {React.Children.map(children, (child: any) => {
        return <WrapItem w={{ base: '320px', md: '420px' }}>{React.cloneElement(child)}</WrapItem>;
      })}
    </Wrap>
  );
};
