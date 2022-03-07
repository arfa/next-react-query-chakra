import { Button } from '@chakra-ui/react';
import React from 'react';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  variant?: 'solid' | 'outline' | 'link' | 'ghost';
  /**
   * How large should the button be?
   */
  size?: 'xs' | 'sm' | 'md' | 'lg';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const ChakraButton = ({
  variant = 'outline',
  size = 'md',
  label,
  ...props
}: ButtonProps) => {
  return (
    <Button
      type="button"
      variant={variant}
      size={size}
      {...props}
    >
      {label}
    </Button>
  );
};