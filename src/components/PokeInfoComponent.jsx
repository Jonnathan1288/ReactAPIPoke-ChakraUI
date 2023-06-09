import React, { useEffect } from 'react'
import { Card, Heading, Text, Divider, Button, CardHeader, CardBody, CardFooter, Image, Stack, Box, Flex, Grid, GridItem, Center } from '@chakra-ui/react'


import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, useDisclosure, ModalFooter } from '@chakra-ui/react'

export const PokeInfoComponent = ({ data }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const handleOpen = () => {
        onOpen();
    };


    useEffect(() => {
        if (data) {
            handleOpen();
        }

    }, [data])

    return (
        <>
            {
                (!data) ? "" : (
                    <>


                        <Modal onClose={onClose} isOpen={isOpen} isCentered size="3xl">
                            <ModalOverlay />
                            <ModalContent >
                                <ModalHeader> {
                                    data.abilities.map(poke => {
                                        return (
                                            <>

                                                <Heading size='md' >{poke.ability.name.toUpperCase()}</Heading>

                                            </>
                                        )
                                    })
                                }</ModalHeader>
                                <ModalCloseButton />
                                <ModalBody>
                                    <Flex>
                                        
                                        <Center  >
                                            
                                            <Image
                                                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                                                alt='Green double couch with wooden legs'
                                                borderRadius='lg'
                                                boxSize="300px"
                                                bg="gray.100" m={1}
                                            />
                                        </Center>

                                        <Box ml={8} flexGrow={1}>
                                            <Text fontWeight="bold" fontSize="xl" mb={4}>
                                                Estadísticas
                                            </Text>
                                            <Box bg="gray.100" borderRadius="md" p={4}>
                                                {data.stats.map((stat) => (
                                                    <Box key={stat.stat.name} mb={2}>
                                                        <Text color="blue.600" fontSize="md" fontWeight="bold">
                                                            {stat.stat.name}
                                                        </Text>
                                                        <Box
                                                            bg="blue.200"
                                                            h={4}
                                                            borderRadius="md"
                                                            mt={2}
                                                            position="relative"
                                                        >
                                                            <Box
                                                                bg="blue.500"
                                                                h="100%"
                                                                borderRadius="md"
                                                                width={`${(stat.base_stat / 255) * 100}%`}
                                                            />
                                                        </Box>
                                                        <Text fontSize="sm" color="gray.500">
                                                            Base Stat: {stat.base_stat}
                                                        </Text>
                                                    </Box>
                                                ))}
                                            </Box>
                                        </Box>
                                    </Flex>
                                </ModalBody>

                                <ModalFooter>
                                    <Button onClick={onClose}>Close</Button>
                                </ModalFooter>
                            </ModalContent>
                        </Modal>
                    </>

                )
            }
        </>
    )
}
