import { Button, Flex, Heading, IconButton, useColorModeValue } from '@chakra-ui/react'
import * as React from 'react'

export const ColumnHeader = (props) => (
  <Flex
    minH="12"
    position="sticky"
    zIndex={1}
    top="0"
    px="3"
    align="center"
    bg={useColorModeValue('white', 'gray.800')}
    color={useColorModeValue('gray.700', 'white')}
    {...props}
  />
)
export const ColumnHeading = (props) => (
  <Heading fontWeight="bold" fontSize="sm" lineHeight="1.25rem" {...props} />
)
export const ColumnButton = (props) => (
  <Button
    variant="outline"
    size="sm"
    fontSize="xs"
    _hover={{
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    _active={{
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    _focus={{
      boxShadow: 'none',
    }}
    _focusVisible={{
      boxShadow: 'outline',
    }}
    {...props}
  />
)
export const ColumnIconButton = (props) => (
  <IconButton
    size="sm"
    fontSize="md"
    variant="ghost"
    _hover={{
      bg: useColorModeValue('gray.100', 'gray.700'),
    }}
    _active={{
      bg: useColorModeValue('gray.200', 'gray.600'),
    }}
    _focus={{
      boxShadow: 'none',
    }}
    _focusVisible={{
      boxShadow: 'outline',
    }}
    {...props}
  />
)
